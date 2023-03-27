import { defineStore } from "pinia";

export const useLayoutStore = defineStore("Layout", {
  state: () => ({
    visible: false
  }),
  getters: {},
  actions: {
    setVisible() {
      // 修改登录对话框状态
      this.visible = !this.visible;
    }
  }
});
