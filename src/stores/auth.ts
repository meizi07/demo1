import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  orgId: string;
  account: string;
  password: string;
  token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    const modifiedAuthUser = {
      ...authUser,
      //orgId: authUser.OrgID, // 将 "OrgID" 的值赋给 "orgId"
      //account, // 保留 account 字段
    };
    //delete modifiedAuthUser.OrgID; // 删除 "OrgID" 键

    user.value = modifiedAuthUser;
    errors.value = {};
    JwtService.saveToken(user.value.token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(formData: FormData) {
    return ApiService.post("login/checkLogin.php", formData)
      .then(({ data }) => {
        // 成功時的回應
        if (data.success) {
          setAuth(data.success.OrgInfo);
        } else {
          setError({ code: data.ErrorCode, message: data.ErrorMsg });
        }
      })
      .catch(({ response }) => {
        // 處理其他錯誤，如網路問題等
        setError(response.data.errors);
      });
  }

  function logout() {
    purgeAuth();
  }

  // function register(credentials: User) {
  //   return ApiService.post("register", credentials)
  //     .then(({ data }) => {
  //       setAuth(data);
  //     })
  //     .catch(({ response }) => {
  //       setError(response.data.errors);
  //     });
  // }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function verifyAuth() {
    if (JwtService.getToken()) {
      // ApiService.setHeader();
      // ApiService.post("login/checkLogin.php", )
      //   .then(({ data }) => {
      //     console.log(data);
      //     setAuth(data);
      //   })
      //   .catch(({ response }) => {
      //     setError(response.data.errors);
      //     purgeAuth();
      //   });
      console.log("verifyAuth");
    } else {
      purgeAuth();
    }
  }

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    // register,
    forgotPassword,
    verifyAuth,
  };
});
