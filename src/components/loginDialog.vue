<template>
  <el-dialog v-model="layoutStore.visible" title="登录" width="30%" destroy-on-close :close-on-click-modal="false">
    <span>内容</span>
  </el-dialog>
</template>

<script lang="ts" setup>
import { useLayoutStore } from "../store";

// 获取pinia
const layoutStore = useLayoutStore();
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
