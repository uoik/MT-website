<template>
  <!-- main内容展示区域 -->
  <div class="page-index">
    <!-- 上部分( 左侧分类列表 + 轮播图 ) -->
    <el-row>
      <!-- 左侧分类列表 -->
      <el-col :span="5">
        <m-menu />
      </el-col>
      <!-- 右侧轮播图 -->
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>

    <!-- 有格调 -->
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle" />
      </el-col>
    </el-row>
    <!-- 狠优惠 -->
    <el-row>
      <el-col :span="24">
        <container :nav="preferential" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu.vue";
import MLife from "@/components/index/life.vue";
import Container from "@/components/index/container.vue";

export default {
  data() {
    return {
      iStyle: {
        class: 'istyle',
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      },
      preferential: {
        class: 'youhui',
        title: "狠优惠",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "美食",
            tab: "food"
          },
          {
            text: "休闲",
            tab: "leisure"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    MLife,
    Container
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index/index.scss";
</style>
