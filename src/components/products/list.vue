<template>
  <!-- 产品列表页面 -->
  <div class="m-products-list">
    <!-- 排序导航条组件 -->
    <ul>
      <li :class="{'s-nav-active': item.active}" v-for="item in nav" :key="item.key">{{ item.name }}</li>
    </ul>
    <!-- 列表内容组件 -->
    <el-row>
        <item v-for="(item, index) in productList" :key="index" :meta='item'/>
    </el-row>
  </div>
</template>

<script>
import Item from './item.vue'
import api from '@/api/index.js'

export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: []
    };
  },
  created() {
     // 产品展示列表数据获取
    api.getGoodsList().then(res => {
      console.log(res);
      this.productList = res.data.data
    })
  },
  components: {
      Item
  }
};
</script>

<style>
</style>