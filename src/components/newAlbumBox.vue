<template>
  <div class="newAlbum">
    <div class="box" v-for="newAlbumItem in albumNew" :key="newAlbumItem.id">
      <img :src="newAlbumItem.blurPicUrl" alt="" />
      <div class="albumName">
        <el-tooltip effect="light" :content="newAlbumItem.name" placement="bottom-start">
          <a href="javascript:;" class="company">{{ newAlbumItem.name }}</a>
        </el-tooltip>
      </div>
      <div class="artistsButs">
        <a href="javascript:;" class="artists" v-for="artistsItem in newAlbumItem.artists" :key="artistsItem.id">{{ artistsItem.name }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ albumNew: {} }>();
</script>

<style scoped lang="scss">
.newAlbum {
  display: flex;
  flex-wrap: wrap;

  .box {
    width: 200px;
    margin: 0 5px 10px;

    img {
      width: 100%;
    }

    .albumName {
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .company {
        height: 21px;
        font-size: 14px;
      }
    }

    .artistsButs {
      height: 20px;
      overflow: hidden;

      .artists {
        margin-right: 5px;
        font-size: 12px;
        color: #8d8d8d;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>