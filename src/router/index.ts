import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/calendar",
        name: "main-calendar",
        component: () => import("@/views/Calendar.vue"),
        meta: {
          pageTitle: "行事曆",
          breadcrumbs: ["Calendar"],
        },
      },
      {
        path: "/todo-list",
        name: "main-todolist",
        component: () => import("@/views/TodoList.vue"),
        meta: {
          pageTitle: "待辦事項",
          breadcrumbs: ["Todo List"],
        },
      },
      {
        path: "/notifications",
        name: "main-notifications",
        component: () => import("@/views/Notifications.vue"),
        meta: {
          pageTitle: "提醒",
          breadcrumbs: ["Notifications"],
        },
      },
      {
        path: "/audit",
        name: "審核中心",
        meta: {
          breadcrumbs: ["Audit"],
        },
        children: [
          {
            path: "audit",
            name: "main-audit-client",
            component: () => import("@/views/audit/Client.vue"),
            meta: {
              pageTitle: "內部單據",
            },
          },
          {
            path: "client",
            name: "main-audit-client",
            component: () => import("@/views/audit/Client.vue"),
            meta: {
              pageTitle: "客戶簽收",
            },
          },
        ],
      },
      {
        path: "/befort-project/client-info",
        name: "客戶資訊",
        meta: {
          breadcrumbs: ["Client Information"],
        },
        children: [
          {
            path: "client-list",
            name: "bj-client-list",
            component: () =>
              import(
                "@/views/before-project/client-info/client/Client_list.vue"
              ),
            meta: {
              pageTitle: "客戶資料",
            },
          },
          {
            path: "client-details/:customerId",
            name: "bj-client-details",
            component: () =>
              import(
                "@/views/before-project/client-info/client/ClientDetails.vue"
              ),
            meta: {
              pageTitle: "客戶資料",
            },
          },
          {
            path: "add-client",
            name: "bj-client-add",
            component: () =>
              import("@/views/before-project/client-info/client/AddClient.vue"),
            meta: {
              pageTitle: "新增客戶資料",
            },
          },
          {
            path: "edit-client/:customerId",
            name: "bj-client-edit",
            component: () =>
              import(
                "@/views/before-project/client-info/client/EditClient.vue"
              ),
            meta: {
              pageTitle: "編輯客戶資料",
            },
          },
          {
            path: "demand-list",
            name: "bj-demand-list",
            component: () =>
              import(
                "@/views/before-project/client-info/demand/Demand_list.vue"
              ),
            meta: {
              pageTitle: "需求單",
            },
          },
          {
            path: "demand-details/:requirementId",
            name: "bj-demand-details",
            component: () =>
              import(
                "@/views/before-project/client-info/demand/DemandDetails.vue"
              ),
            meta: {
              pageTitle: "需求單",
            },
          },
          {
            path: "add-demand",
            name: "bj-demand-add",
            component: () =>
              import("@/views/before-project/client-info/demand/AddDemand.vue"),
            meta: {
              pageTitle: "新增需求單",
            },
          },
          {
            path: "housing-list",
            name: "bj-housing-list",
            component: () =>
              import(
                "@/views/before-project/client-info/housing/HousingIndex.vue"
              ),
            meta: {
              pageTitle: "屋況初始紀錄",
            },
          },
          {
            path: "add-housing",
            name: "bj-housing-add",
            component: () =>
              import(
                "@/views/before-project/client-info/housing/AddHousing.vue"
              ),
            meta: {
              pageTitle: "新增屋況初始紀錄",
            },
          },
        ],
      },
      {
        path: "/befort-project/case-management",
        name: "案件管理",
        meta: {
          breadcrumbs: ["Case management"],
        },
        children: [
          {
            path: "management",
            name: "bj-case-management",
            component: () =>
              import(
                "@/views/before-project/case-management/project/Management.vue"
              ),
            meta: {
              pageTitle: "案件管理",
            },
          },
          {
            path: "case-details/:projectId",
            name: "bj-case-details",
            component: () =>
              import(
                "@/views/before-project/case-management/project/CaseDetails.vue"
              ),
            meta: {
              pageTitle: "案件資訊",
            },
            children: [
              {
                path: "p-info",
                components: {
                  default: () =>
                    import(
                      "@/views/before-project/case-management/project/ProjectInfo.vue"
                    ),
                },
                alias:
                  "/befort-project/case-management/case-details/:projectId/p-info",
                meta: {
                  pageTitle: "案件資訊",
                },
              },
              {
                path: "c-info",
                components: {
                  default: () =>
                    import(
                      "@/views/before-project/case-management/project/ClientInfo.vue"
                    ),
                },
                alias:
                  "/befort-project/case-management/case-details/:projectId/c-info",
                meta: {
                  pageTitle: "案件資訊",
                },
              },
            ],
          },
          {
            path: "add-project",
            name: "bj-case-add",
            component: () =>
              import(
                "@/views/before-project/case-management/project/AddCase.vue"
              ),
            meta: {
              pageTitle: "新增案件資訊",
            },
          },
          {
            path: "edit-project/:projectId",
            name: "bj-case-edit",
            component: () =>
              import(
                "@/views/before-project/case-management/project/EditCase.vue"
              ),
            meta: {
              pageTitle: "編輯案件資訊",
            },
          },
          // {
          //   path: "demand-list",
          //   name: "bj-demand-list",
          //   component: () =>
          //     import("@/views/before-project/case-management/Demand_list.vue"),
          //   meta: {
          //     pageTitle: "我的案件",
          //   },
          // },
          // {
          //   path: "housing-list",
          //   name: "bj-housing-list",
          //   component: () =>
          //     import("@/views/before-project/case-management/Housing_list.vue"),
          //   meta: {
          //     pageTitle: "關注的案件",
          //   },
          // },
          {
            path: "expenditure-list",
            name: "bj-case-expenditure-list",
            component: () =>
              import(
                "@/views/before-project/case-management/Expenditure_list.vue"
              ),
            meta: {
              pageTitle: "案件支出紀錄",
            },
          },
        ],
      },
      {
        path: "/befort-project/contract",
        name: "合約",
        meta: {
          breadcrumbs: ["Contract"],
        },
        children: [
          {
            path: "contract-list",
            name: "bj-contract-contract_list",
            component: () =>
              import("@/views/before-project/contract/Contract.vue"),
            meta: {
              pageTitle: "合約",
            },
          },
          {
            path: "terminated",
            name: "bj-contract-terminated",
            component: () =>
              import("@/views/before-project/contract/Terminated.vue"),
            meta: {
              pageTitle: "中止合約列表",
            },
          },
          {
            path: "termination_fee",
            name: "bj-contract-termination_fee",
            component: () =>
              import("@/views/before-project/contract/Termination_fee.vue"),
            meta: {
              pageTitle: "中止費用增減單",
            },
          },
        ],
      },
      {
        path: "/befort-project/quotation_list",
        name: "bj-quotation_list",
        component: () => import("@/views/before-project/Quotation_list.vue"),
        meta: {
          pageTitle: "報價單",
          breadcrumbs: ["Quotation list"],
        },
      },
      {
        path: "/befort-project/po_list",
        name: "bj-po_list",
        component: () => import("@/views/before-project/Po-list.vue"),
        meta: {
          pageTitle: "採購單",
          breadcrumbs: ["Po list"],
        },
      },
      {
        path: "/in-project/graphics_list",
        name: "ij-graphics_list",
        component: () => import("@/views/in-project/Graphics_list.vue"),
        meta: {
          pageTitle: "圖面管理",
          breadcrumbs: ["Graphics list"],
        },
      },
      {
        path: "/in-project/engineering",
        name: "工程管理",
        meta: {
          breadcrumbs: ["Engineering"],
        },
        children: [
          {
            path: "engineering",
            name: "ij-engineering-list",
            component: () =>
              import("@/views/in-project/engineering/Engineering_list.vue"),
            meta: {
              pageTitle: "工程管理列表",
            },
          },
          {
            path: "daily",
            name: "ij-engineering-daily",
            component: () =>
              import("@/views/in-project/engineering/Engineering_daily.vue"),
            meta: {
              pageTitle: "每日工程紀錄",
            },
          },
          {
            path: "check",
            name: "ij-engineering-check",
            component: () =>
              import(
                "@/views/in-project/engineering/Engineering_check_list.vue"
              ),
            meta: {
              pageTitle: "階段性確認",
            },
          },
          {
            path: "step",
            name: "ij-engineering-step",
            component: () =>
              import(
                "@/views/in-project/engineering/Engineering_step_list.vue"
              ),
            meta: {
              pageTitle: "工程項目驗收",
            },
          },
        ],
      },
      {
        path: "/after-project/acceptance_list",
        name: "aj-acceptance_list",
        component: () => import("@/views/after-project/Acceptance_list.vue"),
        meta: {
          pageTitle: "總驗收",
          breadcrumbs: ["Acceptance list"],
        },
      },

      {
        path: "/apps/settings/user",
        name: "app-settings-user",
        component: () => import("@/views/apps/settings/User.vue"),
        meta: {
          pageTitle: "個人設定",
          breadcrumbs: ["User settings"],
        },
      },

      /***--------------------------------------------------***/
      {
        path: "/apps/customers/getting-started",
        name: "apps-customers-getting-started",
        component: () => import("@/views/apps/customers/GettingStarted.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/customers-listing",
        name: "apps-customers-listing",
        component: () => import("@/views/apps/customers/CustomersListing.vue"),
        meta: {
          pageTitle: "Customers Listing",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/customers/customer-details",
        name: "apps-customers-details",
        component: () => import("@/views/apps/customers/CustomerDetails.vue"),
        meta: {
          pageTitle: "Customers Details",
          breadcrumbs: ["Apps", "Customers"],
        },
      },
      {
        path: "/apps/subscriptions/getting-started",
        name: "apps-subscriptions-getting-started",
        component: () =>
          import("@/views/apps/subscriptions/GettingStarted.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/subscription-list",
        name: "apps-subscriptions-subscription-list",
        component: () =>
          import("@/views/apps/subscriptions/SubscriptionList.vue"),
        meta: {
          pageTitle: "Getting Started",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/add-subscription",
        name: "apps-subscriptions-add-subscription",
        component: () =>
          import("@/views/apps/subscriptions/AddSubscription.vue"),
        meta: {
          pageTitle: "Add Subscription",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/subscriptions/view-subscription",
        name: "apps-subscriptions-view-subscription",
        component: () =>
          import("@/views/apps/subscriptions/ViewSubscription.vue"),
        meta: {
          pageTitle: "View Subscription",
          breadcrumbs: ["Apps", "Subscriptions"],
        },
      },
      {
        path: "/apps/chat/private-chat",
        name: "apps-private-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
          pageTitle: "Private Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/apps/chat/group-chat",
        name: "apps-group-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
          pageTitle: "Group Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/apps/chat/drawer-chat",
        name: "apps-drawer-chat",
        component: () => import("@/views/apps/chat/DrawerChat.vue"),
        meta: {
          pageTitle: "Drawer Chat",
          breadcrumbs: ["Apps", "Chat"],
        },
      },
      {
        path: "/crafted/modals/general/invite-friends",
        name: "modals-general-invite-friends",
        component: () =>
          import("@/views/crafted/modals/general/InviteFriends.vue"),
        meta: {
          pageTitle: "Invite Friends",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/view-user",
        name: "modals-general-view-user",
        component: () => import("@/views/crafted/modals/general/ViewUsers.vue"),
        meta: {
          pageTitle: "View User",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/upgrade-plan",
        name: "modals-general-upgrade-plan",
        component: () =>
          import("@/views/crafted/modals/general/UpgradePlan.vue"),
        meta: {
          pageTitle: "Upgrade Plan",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/general/share-and-earn",
        name: "modals-general-share-and-earn",
        component: () =>
          import("@/views/crafted/modals/general/ShareAndEarn.vue"),
        meta: {
          pageTitle: "Share And Earn",
          breadcrumbs: ["Crafted", "Modals", "General"],
        },
      },
      {
        path: "/crafted/modals/forms/new-target",
        name: "modals-forms-new-target",
        component: () => import("@/views/crafted/modals/forms/NewTarget.vue"),
        meta: {
          pageTitle: "New Target",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/new-card",
        name: "modals-forms-new-card",
        component: () => import("@/views/crafted/modals/forms/NewCard.vue"),
        meta: {
          pageTitle: "New Card",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/new-address",
        name: "modals-forms-new-address",
        component: () => import("@/views/crafted/modals/forms/NewAddress.vue"),
        meta: {
          pageTitle: "New Address",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/forms/create-api-key",
        name: "modals-forms-create-api-key",
        component: () =>
          import("@/views/crafted/modals/forms/CreateApiKey.vue"),
        meta: {
          pageTitle: "Create Api Key",
          breadcrumbs: ["Crafted", "Modals", "Forms"],
        },
      },
      {
        path: "/crafted/modals/wizards/two-factor-auth",
        name: "modals-wizards-two-factor-auth",
        component: () =>
          import("@/views/crafted/modals/wizards/TwoFactorAuth.vue"),
        meta: {
          pageTitle: "Two Factory Auth",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/modals/wizards/create-app",
        name: "modals-wizards-create-app",
        component: () => import("@/views/crafted/modals/wizards/CreateApp.vue"),
        meta: {
          pageTitle: "Create App",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/modals/wizards/create-account",
        name: "modals-wizards-create-account",
        component: () =>
          import("@/views/crafted/modals/wizards/CreateAccount.vue"),
        meta: {
          pageTitle: "Create Account",
          breadcrumbs: ["Crafted", "Modals", "Wizards"],
        },
      },
      {
        path: "/crafted/widgets/lists",
        name: "widgets-list",
        component: () => import("@/views/crafted/widgets/Lists.vue"),
        meta: {
          pageTitle: "Lists",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/statistics",
        name: "widgets-statistics",
        component: () => import("@/views/crafted/widgets/Statistics.vue"),
        meta: {
          pageTitle: "Statistics",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/charts",
        name: "widgets-charts",
        component: () => import("@/views/crafted/widgets/Charts.vue"),
        meta: {
          pageTitle: "Charts",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/mixed",
        name: "widgets-mixed",
        component: () => import("@/views/crafted/widgets/Mixed.vue"),
        meta: {
          pageTitle: "Mixed",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/tables",
        name: "widgets-tables",
        component: () => import("@/views/crafted/widgets/Tables.vue"),
        meta: {
          pageTitle: "Tables",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
      {
        path: "/crafted/widgets/feeds",
        name: "widgets-feeds",
        component: () => import("@/views/crafted/widgets/Feeds.vue"),
        meta: {
          pageTitle: "Feeds",
          breadcrumbs: ["Crafted", "Widgets"],
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
      {
        path: "/sign-up",
        name: "sign-up",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
        meta: {
          pageTitle: "Sign Up",
        },
      },
      {
        path: "/password-reset",
        name: "password-reset",
        component: () =>
          import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
        meta: {
          pageTitle: "Password reset",
        },
      },
    ],
  },
  {
    path: "/multi-step-sign-up",
    name: "multi-step-sign-up",
    component: () =>
      import("@/views/crafted/authentication/MultiStepSignUp.vue"),
    meta: {
      pageTitle: "Multi-step Sign up",
    },
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }

  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

export default router;
