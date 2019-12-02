<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave='mouLeave'>
          <dt>全部分类</dt>
          <dd v-for="(item, index) in menuList" :key="index" @mouseenter='menuEnter(item)'>
              <i :class="item.type"></i>
              {{ item.name }}
              <span class="arrow"></span>
          </dd>
      </dl>
      <div class="detail" v-if="curDetail" @mouseenter='detailEnter' @mouseleave='mouLeave'>
          <template v-for="(item, index) in curDetail.items">
              <h4 :key="index">{{ item.title }}</h4>
              <span v-for="(v, i) in item.items" :key="v + '_' + i">{{ v }}</span>
          </template>
      </div>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {
    data () {
        return {
            curDetail: null,
            menuList: []
        }
    },
    created() {
        // 首页左侧导航条 导航数据
        api.getMenuList().then(res => {
            this.menuList = res.data.data;
        })
    },
    methods: {
        menuEnter(item) {
            this.curDetail = item
        },
        mouLeave() {
            let that = this
            this.timer = setTimeout(() => {
                that.curDetail = null
            }, 100)
        },
        detailEnter() {
            clearTimeout(this.timer)
        }
    }
}
</script>

<style>

</style>
