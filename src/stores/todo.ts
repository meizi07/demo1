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
  const SINGLE_TODO_MODAL_ID = "modal_single_todo";
  const NEW_TODO_MODAL_ID = "modal_new_todo";

  const projectOptions = ref<ProjectOption[]>([]);
  const unfinishedData = ref<Todo[]>([]);
  const finishedData = ref<Todo[]>([]);
  const currentTodo = ref<Todo | null>(null);
  const isSingleTodoModalOpen = ref(false);
  const inEditMode = ref(false);

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

  function closeSingleTodoModal() {
    hideModal(document.getElementById(SINGLE_TODO_MODAL_ID));

    inEditMode.value = false;
    isSingleTodoModalOpen.value = false;
    currentTodo.value = null;
  }

  function clickOutsideSingleTodoModal(event: Event) {
    if (
      event.target &&
      (event.target as HTMLElement).id === SINGLE_TODO_MODAL_ID
    ) {
      closeSingleTodoModal();
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
        isSingleTodoModalOpen.value = true;

        nextTick(() => {
          showModal(document.getElementById(SINGLE_TODO_MODAL_ID));
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

  async function addNewTodo(data: NewTodo) {
    try {
      const response = await ApiService.post("personal/addToDoData", {
        ...DEFAULT_QUERY_PARAMS,
        ...data,
      });

      if (response.data && response.data.success === 1) {
        fetchTodoData();
        hideModal(document.getElementById(NEW_TODO_MODAL_ID));
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

  function editCurrentTodo() {
    inEditMode.value = true;
    console.log("edit icon clicked");
  }

  return {
    projectOptions,
    finishedData,
    unfinishedData,
    currentTodo,
    isSingleTodoModalOpen,
    inEditMode,
    fetchTodoData,
    fetchCurrentTodo,
    fetchProjectOptions,
    closeSingleTodoModal,
    clickOutsideSingleTodoModal,
    addNewTodo,
    editCurrentTodo,
  };
});
