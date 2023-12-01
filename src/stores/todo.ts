import { ref, type Ref } from "vue";
import type { AxiosResponse } from "axios";
import type { Todo } from "@/types/todo";
import { TodoStatus } from "@/types/todo";
import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";

export const useTodoStore = defineStore("todo", () => {
  const authStore = useAuthStore();

  const DEFAULT_QUERY_PARAMS = {
    orgId: authStore.user.orgId,
    account: authStore.user.account,
    token: authStore.user.token,
  };

  const unfinishedData = ref<Todo[]>([]);
  const finishedData = ref<Todo[]>([]);
  const currentTodo = ref<Todo | null>(null);

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
    if (response.data.success) {
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

  async function getCurrentTodo(uuid: string) {
    try {
      const response = await ApiService.post("personal/getToDoData", {
        ...DEFAULT_QUERY_PARAMS,
        uuid,
      });

      if (response.data.success) {
        currentTodo.value = response.data.success;
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

  return {
    finishedData,
    unfinishedData,
    currentTodo,
    fetchTodoData,
    getCurrentTodo,
  };
});
