<template>
<!-- 头部上部分 区域-->
  <el-row class="m-header-topbar m-header">
    <!-- 左侧登陆区域 -->
      <el-col :span="10">
          <geo />
      </el-col>
      
      <!-- 右侧导航区域 -->
      <el-col :span="14">
          <m-nav />
      </el-col>
  </el-row>
</template>

<script>
import geo from './geo.vue'
import MNav from './nav.vue'
export default {
  components: {
    geo,
    MNav
  }
}
</script>

<style lang="scss">
    @import "@/assets/css/public/header/topbar.scss";
</style>
