<template>
  <div class="buttons_group">
    <div class="button_item" v-for="(item, index) in buttons" :key="item.text">
      <a href="#" :class="item.active ? 'active' : ''" @click="tabsActive(index)">{{ item.text }}</a>
    </div>
  </div>
  <div style="padding: 0 240px">
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";

// 按钮组
const buttons = reactive([
  { active: 1, text: "推荐" },
  { active: 0, text: "排行榜" },
  { active: 0, text: "歌单" },
  { active: 0, text: "主播电台" },
  { active: 0, text: "歌手" },
  { active: 0, text: "新碟上架" }
]);

// 按钮点击事件
const tabsActive = (index: number) => {
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
