import { nextTick, ref, type Ref } from "vue";
import type { AxiosResponse } from "axios";
import ApiService from "@/core/services/ApiService";
import { showModal, hideModal } from "@/core/helpers/dom";
import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";
import type { Todo, NewTodo, ProjectOption } from "@/types/todo";
import { TodoStatus } from "@/types/todo";

export const useTodoStore = defineStore("todo", () => {
  const authStore = useAuthStore();

  const DEFAULT_QUERY_PARAMS = {
    orgId: authStore.user.orgId,
    account: authStore.user.account,
    token: authStore.user.token,
  };
  const API_ADD_TODO = "personal/addToDoData";
  const API_UPDATE_TODO = "personal/updateToDoData";
  const TODO_MODAL_ID = "modal_todo";

  const projectOptions = ref<ProjectOption[]>([]);
  const unfinishedData = ref<Todo[]>([]);
  const finishedData = ref<Todo[]>([]);
  const currentTodo = ref<Todo | null>(null);
  const isTodoModalOpen = ref(false);
  const inEditMode = ref(false);
  const isNewTodo = ref(false);

  function _createFormData() {
    const formData = new FormData();

    formData.append("orgId", authStore.user.orgId);
    formData.append("account", authStore.user.account);
    formData.append("token", authStore.user.token);

    return formData;
  }

  function _generateApiService(isFinish: TodoStatus) {
    const formData = _createFormData();

    formData.append("isFinish", isFinish);

    return ApiService.post("personal/getToDoListForPersonal", formData);
  }

  function _processTodoData(
    response: AxiosResponse,
    dataContainer: Ref<Todo[]>
  ) {
    if (response.data && response.data.success) {
      dataContainer.value = response.data.success;
    } else {
      console.error(
        "獲取待辦清單失敗，狀態： " +
          response.status +
          " " +
          response.statusText
      );

      return [];
    }
  }

  async function fetchTodoData() {
    try {
      const [unfinishedResponse, finishedResponse] = await Promise.all([
        _generateApiService(TodoStatus.Unfinished),
        _generateApiService(TodoStatus.Finished),
      ]);

      _processTodoData(unfinishedResponse, unfinishedData);
      _processTodoData(finishedResponse, finishedData);
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  function closeTodoModal() {
    hideModal(document.getElementById(TODO_MODAL_ID));

    isTodoModalOpen.value = false;
    inEditMode.value = false;
    isNewTodo.value = false;
    currentTodo.value = null;
  }

  function clickOutsideTodoModal(event: Event) {
    if (event.target && (event.target as HTMLElement).id === TODO_MODAL_ID) {
      closeTodoModal();
    }
  }

  async function fetchCurrentTodo(uuid: string) {
    try {
      const response = await ApiService.post("personal/getToDoData", {
        ...DEFAULT_QUERY_PARAMS,
        uuid,
      });

      if (response.data && response.data.success) {
        currentTodo.value = response.data.success[0];
        isTodoModalOpen.value = true;

        nextTick(() => {
          showModal(document.getElementById(TODO_MODAL_ID));
        });
      } else {
        console.error(
          "獲取待辦清單 " +
            uuid +
            " 失敗，狀態： " +
            response.status +
            " " +
            response.statusText
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  async function fetchProjectOptions() {
    try {
      const formData = _createFormData();

      const response = await ApiService.post(
        "/projectBefore/getAllProjectList",
        formData
      );

      if (response.data && response.data.success) {
        projectOptions.value = response.data.success.All.map((project) => ({
          label: project.ProjectName,
          value: project.ProjectID,
        }));
      } else {
        console.error(
          "獲取案件清單失敗，狀態： " +
            response.status +
            " " +
            response.statusText
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  async function submitTodo(formEl, data: NewTodo) {
    const apiUrl = isNewTodo.value ? API_ADD_TODO : API_UPDATE_TODO;

    try {
      const response = await ApiService.post(apiUrl, {
        ...DEFAULT_QUERY_PARAMS,
        ...data,
      });

      if (response.data && response.data.success === 1) {
        isTodoModalOpen.value = false;

        closeTodoModal();
        fetchTodoData();
        formEl.resetFields();
      } else {
        console.error(
          "新增待辦清單失敗，狀態： " +
            response.status +
            " " +
            response.statusText
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  function editCurrentTodo(isNew: boolean = true) {
    inEditMode.value = true;
    isTodoModalOpen.value = true;

    if (isNew) {
      isNewTodo.value = true;
    }
  }

  return {
    projectOptions,
    finishedData,
    unfinishedData,
    currentTodo,
    isTodoModalOpen,
    inEditMode,
    isNewTodo,
    fetchTodoData,
    fetchCurrentTodo,
    fetchProjectOptions,
    closeTodoModal,
    clickOutsideTodoModal,
    submitTodo,
    editCurrentTodo,
  };
});
