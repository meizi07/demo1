import { ref, type Ref } from "vue";
import type { AxiosResponse } from "axios";
import ApiService from "@/core/services/ApiService";
import { showModal, hideModal } from "@/core/helpers/dom";
import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";
import type { Todo, NewTodo, ProjectOption } from "@/types/Todo";
import { TodoStatus } from "@/types/Todo";

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

  function resetStates() {
    isTodoModalOpen.value = false;
    inEditMode.value = false;
    isNewTodo.value = false;
    currentTodo.value = null;
  }

  function closeTodoModal() {
    hideModal(document.getElementById(TODO_MODAL_ID));
    resetStates();
  }

  function clickOutsideTodoModal(event: Event) {
    if (event.target && (event.target as HTMLElement).id === TODO_MODAL_ID) {
      closeTodoModal();
    }
  }

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

  async function fetchUnfinishedTodoData() {
    try {
      const response = await _generateApiService(TodoStatus.Unfinished);

      _processTodoData(response, unfinishedData);
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
    hideModal(document.getElementById(TODO_MODAL_ID));

    const apiUrl = isNewTodo.value ? API_ADD_TODO : API_UPDATE_TODO;

    try {
      const response = await ApiService.post(apiUrl, {
        ...DEFAULT_QUERY_PARAMS,
        ...data,
      });

      if (response.data && response.data.success === 1) {
        fetchTodoData();
        resetStates();
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

  async function deleteCurrentTodo(uuid: string = "") {
    hideModal(document.getElementById(TODO_MODAL_ID));

    try {
      const response = await ApiService.post("personal/deleteToDoData", {
        ...DEFAULT_QUERY_PARAMS,
        uuid: uuid,
      });

      if (response.data && response.data.success === 1) {
        fetchTodoData();
        resetStates();
      } else {
        console.error(
          "刪除待辦清單失敗，狀態： " +
            response.status +
            " " +
            response.statusText
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  async function toggleTodoStatus(uuid: string = "", status: TodoStatus) {
    const formData = _createFormData();

    formData.append("uuid", uuid);
    formData.append("status", status);

    try {
      const response = await ApiService.post(
        "personal/updateToDoDataStatus",
        formData
      );

      if (response.data && response.data.success === 1) {
        fetchTodoData();
      } else {
        console.error(
          "切換待辦清單狀態失敗，狀態： " +
            response.status +
            " " +
            response.statusText
        );
      }
    } catch (error) {
      console.error("API 請求錯誤：", error);
    }
  }

  function getCurrentTodo(uuid: string, status: TodoStatus) {
    const data = status === TodoStatus.Finished ? finishedData : unfinishedData;

    currentTodo.value = data.value.find((todo) => todo.UUID === uuid) || null;

    showModal(document.getElementById(TODO_MODAL_ID));

    isTodoModalOpen.value = true;
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
    fetchUnfinishedTodoData,
    getCurrentTodo,
    fetchProjectOptions,
    closeTodoModal,
    clickOutsideTodoModal,
    submitTodo,
    deleteCurrentTodo,
    toggleTodoStatus,
    editCurrentTodo,
  };
});
