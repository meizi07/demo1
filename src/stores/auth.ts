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
    user.value = { ...authUser, token: authUser.token };
    errors.value = {};
    JwtService.saveToken(authUser.token);
    ApiService.setHeader(); // 确保headers被设置
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
        if (data.success) {
          setAuth(data.success.OrgInfo); // 假设 data.success.OrgInfo 包含 User 信息和 token
          ApiService.setHeader(); // 登录成功后更新headers
        } else {
          setError({ message: "Invalid credentials", details: data });
        }
      })
      .catch((error) => {
        setError({ message: "Login failed", details: error.response.data });
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
    return ApiService.post("forgot_password", { email: email })
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  // function verifyAuth() {
  //   const token = JwtService.getToken();
  //   if (token) {
  //     ApiService.setHeader();
  //     ApiService.get("verifyToken") // 假设这是您验证token的端点
  //       .then(({ data }) => {
  //         if (data.valid) {
  //           setAuth(data.user); // 更新用戶狀態，確保包含從後端獲取的用戶信息
  //         } else {
  //           setError({ message: "Token is invalid." });
  //           purgeAuth(); // 如果token無效則清除認證狀態
  //         }
  //       })
  //       .catch((error) => {
  //         // 處理從 API 接收到的錯誤
  //         setError({
  //           message: "Cannot verify token.",
  //           details: error.response ? error.response.data : {},
  //         });
  //         purgeAuth();
  //       });
  //   } else {
  //     purgeAuth();
  //   }
  // }

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
