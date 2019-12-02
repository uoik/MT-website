<template>
<!-- 合拼头部上下部分 -->
  <div class="m-header">
    <!-- 上部分( 登陆 + 导航 ) -->
      <el-row>
          <top-bar />
      </el-row>
    <!-- 下部分( logo + 搜索框 ) -->
      <el-row>
          <search-bar />
      </el-row>
  </div>
</template>

<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'

export default {
  components: {
    topBar,
    searchBar
  }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/index.scss';
</style>
