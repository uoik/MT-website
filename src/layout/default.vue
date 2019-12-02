<template>
<!-- 模块化页面 区分头部 内容 底部 -->
  <div class="layout-default">
    <!-- 利用element组件库搭建 -->
    <el-container>
      <!-- 头部 -->
      <el-header height=''>
        <!-- 头部组件 -->
          <my-header />
      </el-header>

      <!-- 内容展示部 -->
      <el-main>
        <!-- 嵌套路由 -->
        <router-view>

        </router-view>
      </el-main>

      <!-- 底部 -->
      <el-footer height=''>
        <!-- 底部组件 -->
        <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// 导入对应组件
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>
