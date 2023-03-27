<template>
  <el-menu
    :default-active="activeIndex"
    :ellipsis="false"
    active-text-color="#C20C0C"
    background-color="#333"
    class="el-menu-demo"
    mode="horizontal"
    text-color="#fff"
    @select="handleSelect"
  >
    <div class="logo">
      <img src="../assets/topbar.png" />
    </div>
    <el-menu-item index="1">发现音乐</el-menu-item>
    <el-menu-item index="2">我的音乐</el-menu-item>
    <el-menu-item index="3">关注</el-menu-item>
    <el-menu-item index="4">商城</el-menu-item>
    <el-menu-item index="5">音乐人</el-menu-item>
    <div class="flex-grow" />
    <el-input class="searchFor" placeholder="音乐/视频/电台/用户" size="small">
      <template #prefix>
        <el-icon class="el-input__icon">
          <search />
        </el-icon>
      </template>
    </el-input>
    <el-button :dark="true" class="createCentre" color="#333" size="small">创作者中心</el-button>
    <el-button link size="small" @click="loginDialogVisible">登录</el-button>
  </el-menu>
  <div>
    <router-view></router-view>
  </div>

  <!-- 登录对话框 -->
  <loginDialog />
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import router from "../router";
import loginDialog from "../components/loginDialog.vue";
import { useLayoutStore } from "../store";

let activeIndex = ref("1");
let handleSelect = (index: string) => {
  // 路由跳转
  switch (index) {
    case "1":
      router.push({ name: "findMusic" });
      break;
    case "2":
      router.push({ name: "my" });
      break;
  }
  console.log(index);
};

// 点击登录弹出对话框
let loginDialogVisible = () => {
  useLayoutStore().setVisible();
};
</script>

<style lang="scss" scoped>
.el-menu-demo {
  padding: 0 100px;
  align-items: center;

  .logo {
    width: 180px;
    height: 57px;
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      top: -5px;
    }
  }

  .searchFor {
    width: 200px;
    border-radius: 100px;
  }

  .createCentre {
    margin: 0 0 0 10px;
    border-radius: 100px;
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>
