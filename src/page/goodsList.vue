<template>
  <div class="page-product">
    <!-- 顶部面包屑 -->
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>

     <!-- 左侧列表 -->
    <el-row>
      <el-col :span="19">
        <!-- 分类导航组件 -->
        <categroy />
        <!-- 内容区域组件 -->
        <list />
      </el-col>

      <!-- 右侧地图 + 列表 -->
      <el-col :span="5">
        <!-- 地图 -->
        <!-- 地图无接口 -->
        <!-- 右侧内容列表 -->
        <recommend :list='recommendData'/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/products/crumbs.vue";
import Categroy from "@/components/products/categroy.vue";
import List from "@/components/products/list.vue";
import Recommend from "@/components/products/recommend.vue";
import api from '@/api/index.js'

export default {
  data() {
    return {
      recommendData: [
        {
          itemId: 2412338,
          title: "金真子纸上烤肉（双桥店）",
          imgUrl: "https://p1.meituan.net/mogu/890485aaffe19f69dafd77d52b74399253545.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },
        {
          itemId: 2412339,
          title: "金真子纸上烤肉（双桥店）",
          imgUrl: "https://p1.meituan.net/mogu/605ea10e6b12a9c1cc26edc23909fcd51313876.png@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        },{
          itemId: 2412340,
          title: "金真子纸上烤肉（双桥店）",
          imgUrl: "https://p0.meituan.net/msmerchant/bc34dae2069213750fea5c66c74e6a81134672.jpg@237w_132h_1e_1c",
          score: 4.5,
          consumeNum: null,
          areaName: "双桥",
          lowPrice: "58.0",
          saleNum: null,
          commentNum: 16449,
          detailUrl: "",
          firstCate: [1, 20632, 20426, 20557],
          avgPrice: 59
        }
      ]
    };
  },
  created(){
    // 推荐产品列表 图片地址暂失效，先用mock的数据
    // api.getRecommend().then(res => {
    //   console.log(res)
      // this.recommendData = res.data.data
    // })
  },
  components: {
    Crumbs,
    Categroy,
    List,
    Recommend
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/products/index.scss";
</style>