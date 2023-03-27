<template>
  <!-- 轮播图 -->
  <el-carousel :interval="4000" type="card" height="200px" loop>
    <el-carousel-item v-for="item in data.bannerList" :key="item.imageUrl">
      <img class="bannerImg" :src="item.imageUrl" :alt="item.typeTitle" />
    </el-carousel-item>
  </el-carousel>

  <div>
    <div class="mainNav">
      <h2>推荐歌单</h2>
      <div><a href="#">更多 ></a></div>
    </div>
    <!--  歌单组件  -->
    <songSheetBox :recommendList="data.recommendList" />
  </div>

  <div>
    <div class="mainNav">
      <h2>新碟上架</h2>
      <div>
        <el-button v-for="button in buttons" :key="button.text" text @click="getAreaAlbum(button.area)">{{ button.text }} </el-button>
      </div>
      <div><a href="#">更多 ></a></div>
    </div>

    <!--  新碟组件  -->
    <newAlbumBox :albumNew="data.albumNew" />
  </div>
  <div>
    <div class="mainNav">
      <h2>榜单</h2>
      <div><a href="#">更多 ></a></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getBanner, getRecommend, getAlbumNew } from "../../../api/home";
import { reactive } from "vue";

// 按钮组的配置
const buttons = [
  { area: "ZH", text: "华语" },
  { area: "EA", text: "欧美" },
  { area: "KR", text: "韩国" },
  { area: "JP", text: "日本" }
] as const;

let data = reactive({ bannerList: {}, recommendList: {}, albumNew: {} });
// 获取轮播图
getBanner().then(res => {
  data.bannerList = res.data.banners;
  // console.log(res.data);
});
// 获取推荐歌单
getRecommend(10).then(res => {
  data.recommendList = res.data.result;
  // console.log(res.data.result);
});
// 获取新碟列表
getAlbumNew(10).then(res => {
  data.albumNew = res.data.albums;
});

// 获取不同区域歌单
let getAreaAlbum = (area: string) => {
  getAlbumNew(10, area).then(res => {
    data.albumNew = res.data.albums;
  });
};
</script>

<style scoped lang="scss">
.bannerImg {
  height: 100%;
}

.mainNav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    line-height: 70px;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #ececec;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #ececec;
}
</style>
