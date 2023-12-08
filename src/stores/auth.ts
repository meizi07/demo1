import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export interface User {
  orgId: string;
  account: string;
  password: string;
  token: string;
}

export interface Credentials {
  orgId?: boolean;
  account?: boolean;
  token?: boolean;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());
  const isUserLoaded = ref(false);

  const storedUser = getUserFromLocalStorage();
  if (storedUser) {
    setAuth(storedUser); // 从 localStorage 恢复用户信息
    isUserLoaded.value = true;
  }

  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    user.value = { ...authUser };
    errors.value = {};
    window.localStorage.setItem("user", JSON.stringify(authUser));
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
          // 取得生成token
          return ApiService.post("verify/generate.php", "").then(
            (tokenResponse) => {
              if (tokenResponse.data.success) {
                JwtService.saveToken(tokenResponse.data.success);
                setAuth(data.success.OrgInfo); // 假设 data.success.OrgInfo 包含用户信息
                ApiService.setHeader(); // 更新headers，可能需要包含token
              } else {
                setError({
                  message: "Token generation failed",
                  details: tokenResponse.data,
                });
              }
            }
          );
        } else {
          console.log(13);
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

  function verifyAuth() {
    const token = JwtService.getToken();
    if (token) {
      console.log(token);

      ApiService.setHeader();
      ApiService.post("verify/verify")
        .then(({ data }) => {
          console.log("Token is valid until:", data);
          // setAuth(data); // 根据您的应用逻辑设置认证状态
        })
        .catch(({ response }) => {
          console.error("Token verification error:", response.data.ErrorMsg);
          setError(response.data.errors);
          purgeAuth();
        });
    } else {
      purgeAuth();
    }
  }

  function getUserFromLocalStorage() {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  }

  function createAuthFormData(options: Credentials) {
    const formData = new FormData();

    Object.keys(options).forEach((key) => {
      if (options[key]) {
        formData.append(key, user.value[key]);
      }
    });

    return formData;
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
    getUserFromLocalStorage,
    createAuthFormData,
    isUserLoaded,
  };
});
