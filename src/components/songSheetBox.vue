<template>
  <div class="main">
    <div v-for="item in recommendList" :key="item.id">
      <div class="box">
        <!--   播放量   -->
        <div class="playCount">{{ useNumberConversion(item.playCount) }}</div>
        <!--   背景图   -->
        <div class="bgImg"><img :src="item.picUrl" alt="" /></div>
        <div class="broadcastIcon">
          <el-icon color="#ffffff">
            <VideoPlay />
          </el-icon>
        </div>
        <!--   蒙版     -->
        <div class="masking"></div>
      </div>

      <!--   文本   -->
      <div class="title">
        <!--    文字提示组件    -->
        <!--<el-tooltip :content="item.name" placement="top">-->
        <a href="#">{{ item.name }}</a>
        <!--</el-tooltip>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VideoPlay } from "@element-plus/icons-vue";
import { useNumberConversion } from "../hooks/useNumberConversion";

defineProps<{ recommendList: {} }>();
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    width: 190px;
    margin: 0 10px 10px;
  }

  .box {
    width: 200px;
    height: 200px;
    position: relative;

    .playCount {
      position: absolute;
      right: 0;
      color: white;
      font-size: 14px;
      z-index: 100;
    }

    .broadcastIcon {
      //display: none;
      position: absolute;
      bottom: 0;
      right: 10px;
      font-size: 36px;
    }

    .bgImg {
      img {
        width: 100%;
      }
    }

    .masking {
      width: 200px;
      height: 200px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.18);
      z-index: 98;
    }
  }

  .title {
    a {
      font-size: 14px;
    }
  }
}
</style>
