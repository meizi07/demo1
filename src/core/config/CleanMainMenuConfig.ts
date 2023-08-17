export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    heading: "個人專區",
    pages: [
      {
        heading: "首頁",
        route: "/dashboard",
        keenthemesIcon: "home",
        bootstrapIcon: "bi-house",
      },
      {
        heading: "行事曆",
        route: "/calendar",
        keenthemesIcon: "calendar-8",
        bootstrapIcon: "bi-calendar3-event",
      },
      {
        heading: "待辦事項",
        route: "/todo-list",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-list-ul",
      },
      {
        heading: "提醒",
        route: "/notifications",
        keenthemesIcon: "notification",
        bootstrapIcon: "bi-bell",
      },
      {
        sectionTitle: "審核中心",
        route: "/audit",
        keenthemesIcon: "check-square",
        bootstrapIcon: "bi-check-square",
        sub: [
          {
            heading: "內部單據",
            route: "/audit",
          },
          {
            heading: "客戶簽收",
            route: "/audit/client",
          },
        ],
      },
    ],
  },
  {
    heading: "專案執行前",
    pages: [
      {
        sectionTitle: "客戶資訊",
        route: "/befort-project/client-info",
        keenthemesIcon: "profile-user",
        bootstrapIcon: "bi-people",
        sub: [
          {
            heading: "客戶資料",
            route: "/befort-project/client-info/client-list",
          },
          {
            heading: "需求單",
            route: "/befort-project/client-info/demand-list",
          },
          {
            heading: "屋況初始紀錄",
            route: "/befort-project/client-info/housing-list",
          },
        ],
      },
      {
        sectionTitle: "案件管理",
        route: "/befort-project/case-management",
        keenthemesIcon: "folder",
        bootstrapIcon: "bi-inbox",
        sub: [
          {
            heading: "案件管理",
            route: "/befort-project/case-management/management",
          },
          {
            heading: "我的案件",
            route: "/dashboard",
          },
          {
            heading: "關注的案件",
            route: "/dashboard",
          },
          {
            heading: "案件支出紀錄",
            route: "/befort-project/case-management/expenditure-list",
          },
        ],
      },
      {
        sectionTitle: "合約",
        route: "/contract",
        keenthemesIcon: "brush",
        bootstrapIcon: "bi-brush",
        sub: [
          {
            heading: "合約",
            route: "/befort-project/contract/contract-list",
          },
          {
            heading: "中止合約列表",
            route: "/befort-project/contract/terminated",
          },
          {
            heading: "中止費用增減單",
            route: "/befort-project/contract/termination_fee",
          },
        ],
      },
      {
        heading: "報價單",
        route: "/befort-project/quotation_list",
        keenthemesIcon: "document",
        bootstrapIcon: "bi-file-earmark-text",
      },
      {
        heading: "採購單",
        route: "/befort-project/po_list",
        keenthemesIcon: "add-notepad",
        bootstrapIcon: "bi-file-earmark-plus",
      },
    ],
  },
  {
    heading: "專案執行中",
    pages: [
      {
        heading: "圖面管理",
        route: "/in-project/graphics_list",
        keenthemesIcon: "picture",
        bootstrapIcon: "bi-file-earmark-richtext",
      },
      {
        sectionTitle: "工程管理",
        route: "/in-project/engineering",
        keenthemesIcon: "wrench",
        bootstrapIcon: "bi-tools",
        sub: [
          {
            heading: "工程管理列表",
            route: "/in-project/engineering/engineering",
          },
          {
            heading: "每日工程紀錄",
            route: "/in-project/engineering/daily",
          },
          {
            heading: "階段性確認",
            route: "/in-project/engineering/check",
          },
          {
            heading: "工程項目驗收",
            route: "/in-project/engineering/step",
          },
        ],
      },
      {
        heading: "修繕",
        route: "/#",
        keenthemesIcon: "briefcase",
        bootstrapIcon: "bi-briefcase",
      },
    ],
  },
  {
    heading: "專案執行後",
    pages: [
      {
        heading: "總驗收",
        route: "/after-project/acceptance_list",
        keenthemesIcon: "check-circle",
        bootstrapIcon: "bi-check-circle",
      },
      {
        sectionTitle: "報表",
        route: "/after-project",
        keenthemesIcon: "chart-simple-2",
        bootstrapIcon: "bi-bar-chart-line",
        sub: [
          {
            heading: "報表總覽",
            route: "/#",
          },
          {
            heading: "績效報表",
            route: "/#",
          },
          {
            heading: "案件進度報表",
            route: "/in-project/engineering/check",
          },
          {
            sectionTitle: "案件收支報表",
            route: "/profile",
            sub: [
              {
                heading: "催收款項",
                route: "/#",
              },
              {
                heading: "收支報表",
                route: "/in-project/engineering/step",
              },
              {
                heading: "應收/已收報表",
                route: "/#",
              },
            ],
          },
        ],
      },
      {
        heading: "盤點",
        route: "/in-project/engineering/step",
        keenthemesIcon: "briefcase",
        bootstrapIcon: "bi-briefcase",
      },
    ],
  },
  {
    heading: "其他",
    pages: [
      {
        heading: "會議記錄",
        route: "/#",
        keenthemesIcon: "picture",
        bootstrapIcon: "bi-file-earmark-richtext",
      },
      {
        heading: "留言板",
        route: "/#",
        keenthemesIcon: "briefcase",
        bootstrapIcon: "bi-briefcase",
      },
      {
        heading: "客戶關懷",
        route: "/#",
        keenthemesIcon: "briefcase",
        bootstrapIcon: "bi-briefcase",
      },
    ],
  },
];

export default MainMenuConfig;
