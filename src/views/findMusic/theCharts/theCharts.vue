<template>
  <div class="box">
    <!--  左侧菜单栏  -->
    <ul class="menu-ul">
      <div class="menu-li_nav">云音乐特色榜</div>
      <li class="menu-li" v-for="featuredItem in featuredList" :key="featuredItem.id">
        <img :src="featuredItem.coverImgUrl" alt="" />
        <div class="text-main">
          <div>{{ featuredItem.name }}</div>
          <div>{{ featuredItem.updateFrequency }}</div>
        </div>
      </li>
      <div class="menu-li_nav">全球媒体榜</div>
      <li class="menu-li" v-for="mediaRankingsItem in mediaRankings" :key="mediaRankingsItem.id">
        <img :src="mediaRankingsItem.coverImgUrl" alt="" />
        <div class="text-main">
          <div>{{ mediaRankingsItem.name }}</div>
          <div>{{ mediaRankingsItem.updateFrequency }}</div>
        </div>
      </li>
    </ul>
    <!--  右侧歌单内容  -->
    <div class="main">
      <!-- 歌单介绍 -->
      <div class="song-sheet">
        <img class="song-sheet_img" :src="singingListDetails.coverImgUrl" alt="" />
        <div class="song-sheet_information">
          <div class="name">{{ singingListDetails.name }}</div>
          <div>
            <div>最近更新：{{ singingListDetails.createTime }}</div>
          </div>
          <div class="operate">
            <el-button-group>
              <el-button round type="danger" color="#ff0000" :icon="VideoPlay">全部播放</el-button>
              <el-button round type="danger" color="#ff0000" :icon="CirclePlusFilled" />
            </el-button-group>
            <el-button round :icon="DocumentAdd" style="margin-left: 12px">收藏(403万)</el-button>
            <el-button round :icon="Connection">分享(1万)</el-button>
            <el-button round :icon="Download">下载全部</el-button>
          </div>
          <div class="setOf">
            <span>
              歌曲：
              <span class="data">{{ singingListDetails.trackCount }}</span>
            </span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>
              播放：
              <span class="data">{{ useNumberConversion(singingListDetails.playCount) }}</span>
            </span>
          </div>
          <div class="introduce">
            简介：<span class="data">{{ singingListDetails.description }}</span>
          </div>
        </div>
      </div>
      <!-- 歌单列表 -->
      <div class="song-list">
        <div class="song-list_nav">歌曲列表</div>
<!--        <ul>-->
<!--          <li v-for="item in singingListDetails.tracks">{{item.name}}</li>-->
<!--        </ul>-->
        <el-table :data="singingListDetails.tracks" stripe style="width: 100%">
          <el-table-column prop="cd" label="" />
          <el-table-column prop="date" label="操作" width="180" />
          <el-table-column prop="name" label="音乐标题" width="180" />
          <el-table-column prop="" label="歌手" />
          <el-table-column prop="address" label="专辑" />
          <el-table-column prop="dt" label="时长" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VideoPlay, CirclePlusFilled, DocumentAdd, Connection, Download } from "@element-plus/icons-vue";
import { getAllRankings, getSingingListDetails } from "../../../api/findMusic/theCharts";
import { useNumberConversion } from "../../../hooks/useNumberConversion";
import { nextTick, onMounted, reactive, ref } from "vue";
import store from "storejs";

// 云音乐特色榜
let featuredList = reactive([]);
// 全球媒体榜
let mediaRankings = reactive([]);
// 歌单详情
let singingListDetails = reactive({});
// 歌单列表
let songList = reactive({});

onMounted(() => {});

// 获取歌单详情
function getSingingList(id: string | number) {
  getSingingListDetails(id).then(res => {
    singingListDetails = res.data.playlist;
    console.log(res.data.playlist);
  });
}

// 首次加载排行榜所显示的歌单
getSingingList(store.get("singingId"));
nextTick();
// 获取全部榜单
getAllRankings().then(res => {
  console.log("榜单");
  let data = res.data.list;
  data.forEach((item: never, index: number) => {
    if (index <= 3) {
      featuredList.push(item);
    } else {
      mediaRankings.push(item);
    }
  });
});
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;

  .menu-li_nav {
    padding: 10px 0;
  }

  .menu-li {
    width: 200px;
    height: 50px;
    background-color: white;
    cursor: pointer;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    white-space: nowrap;

    img {
      width: 40px;
      height: 40px;
    }

    .text-main {
      margin: 0 0 0 10px;

      :nth-child(1) {
        width: 140px;
        font-size: 14px;
        overflow: hidden;
      }

      :nth-child(2) {
        color: #8d8d8d;
        font-size: 8px;
      }
    }
  }

  .main {
    width: 100%;
    height: 100%;
    min-width: 730px;
    background-color: white;
    padding: 40px 30px;
    margin: 57px 0 0 10px;

    .song-sheet {
      display: flex;
      justify-content: space-between;

      &_img {
        width: 180px;
        height: 180px;
      }

      &_information {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 12px;

        .name {
          font-size: 30px;
        }

        .operate {
        }
      }
    }
    .song-list{
      margin-top: 30px;
      &_nav{
        font-size: 22px;
        ::after{
          content: '';
          width: 100%;
          height: 2px;
          border-radius: 50px;
          background-color: red;
        }
      }
    }
  }
}

.data {
  color: #8d8d8d;
}

.active {
  background-color: #cecece;
}
</style>