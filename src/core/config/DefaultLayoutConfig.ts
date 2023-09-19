import type LayoutConfigTypes from "@/core/config/LayoutConfigTypes";
//import { fa } from "element-plus/es/locale";

const config: LayoutConfigTypes = {
  general: {
    mode: "light",
    primaryColor: "#D45107",
    pageWidth: "fixed",
    layout: "light-sidebar",
    iconsType: "outline",
  },
  header: {
    display: true,
    default: {
      container: "fluid",
      fixed: {
        desktop: true,
        mobile: true,
      },
      menu: {
        display: true,
        iconType: "keenthemes",
      },
    },
  },
  sidebar: {
    display: true,
    default: {
      minimize: {
        desktop: {
          enabled: true,
          default: false,
          hoverable: true,
        },
      },
      menu: {
        iconType: "keenthemes",
      },
    },
  },
  toolbar: {
    display: true,
    container: "fluid",
    fixed: {
      desktop: false,
      mobile: false,
    },
  },
  pageTitle: {
    display: true,
    breadcrumb: false,
    direction: "column",
  },
  content: {
    container: "fixed",
  },
  footer: {
    display: true,
    container: "fixed",
    fixed: {
      desktop: false,
      mobile: false,
    },
  },
  illustrations: {
    set: "sketchy-1",
  },
  scrolltop: {
    display: true,
  },
};

export default config;
