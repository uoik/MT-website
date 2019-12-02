<template>
  <div class="page-changeCity">
      <!-- 省份选择 -->
      <el-row>
        <province />
      </el-row>

      <!-- 热门城市 -->
      <el-row>
          <hot title='热门城市：' :list='hotList' />
      </el-row>

      <!-- 最近访问 -->
      <el-row>
            <hot title='最近访问：' :list='rencentList' />
      </el-row>

      <!-- 城市列表 -->
      <el-row>
          <category />
      </el-row>
  </div>
</template>

<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/Category.vue'
import api from '@/api/index.js'

export default {
    data(){
        return{
            hotList: [],
            rencentList: []
        }
    },
    created(){
        // 获取热门城市
        api.getCityHot().then(res => {
            this.hotList = res.data.data;
        })
        // 获取最近搜索城市
        api.getRecents().then(res => {
            this.rencentList = res.data.data;
        })
    },
    components: {
        Province,
        Hot,
        Category
    }
}
</script>

<style>

</style>