<template>
  <div class="buttons_group">
    <div class="button_item" v-for="(item, index) in buttons" :key="item.text">
      <router-link :to="item.routerName" :class="item.active ? 'active' : ''" @click="tabsActive(index)"> {{ item.text }} </router-link>
    </div>
  </div>
  <div style="padding: 0 240px">
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

// 按钮组配置
const buttons = reactive([
  { active: 1, text: "推荐", routerName: "discover" },
  { active: 0, text: "排行榜", routerName: "theCharts" },
  { active: 0, text: "歌单", routerName: "" },
  { active: 0, text: "主播电台", routerName: "" },
  { active: 0, text: "歌手", routerName: "" },
  { active: 0, text: "新碟上架", routerName: "" }
]);

// 按钮点击事件
const tabsActive = (index: number) => {
  // console.log(routerName);
  buttons.forEach((item, i) => {
    item.active = 0;
    if (i == index) {
      item.active = 1;
    }
  });
};
</script>
<style lang="scss" scoped>
.buttons_group {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .button_item {
    a {
      padding: 10px 20px;
    }
  }
}

.active {
  color: red;
}
</style>
