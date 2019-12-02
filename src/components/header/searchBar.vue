<template>
<!-- 头部搜索区域 -->
  <div class="search-panel">
      <el-row class="m-header-searchbar">
        <!-- logo区域 -->
        <el-col class="left" :span='3'>
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
        </el-col>

        <!-- 搜索框区域 -->
        <el-col class="center" :span='15'>
          <div class="wrapper">
            <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input='input'>
            </el-input><el-button type="primary" icon="el-icon-search"></el-button>
            <dl class="hotPlace" v-if="isHotPlace">
              <dt>热门搜索</dt>
              <dd  v-for="(item, index) in hotPlaceList" :key="index">
                <router-link :to="{ name: 'goods', params: { name: item } }">{{ item }}</router-link>
              </dd>
            </dl>

            <dl class="searchList" v-if="isSearchListL">
              <dd v-for="(item, index) in searchList" :key="index"  @click='change' >
                <router-link :to="{ name: 'goods', params: { name: item } }">{{ item }}</router-link>
              </dd>
            </dl>
          </div>
          <p class="suggest">
            <a href="#" v-for="(item, index) in suggestList" :key="index"> {{ item }} </a>
          </p>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {
  data () {
    return {
      searchWord: '',
      isFouce: false,
      hotPlaceList: [],
      searchList: [],
      suggestList: []
    }
  },
  created() {
    // 请求最近热门搜索
    api.searchHotWords().then(res => {
      this.hotPlaceList = res.data.data.slice(0, 4);
      this.suggestList = res.data.data;
    })
  },
  computed: {
    isHotPlace: function () {
      return this.isFouce && !this.searchWord
    },
    isSearchListL: function () {
      return this.isFouce && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFouce = true
    },
    blur () {
      let that = this
      setTimeout(() => {
        that.isFouce = false
      }, 100)
    },
    // 搜索框列表数据获取
    input() {
      api.getSearchData().then(res => {
        let val = this.searchWord;
        let data = res.data.data.list;
        // 过滤数据
        this.searchList = data.filter(item => {
          return item.indexOf(val) > -1;
        })
      })
    },
    change(e) {
      this.searchWord = e.target.innerText;
    }
  }
}
</script>

<style lang='scss'>
  @import '@/assets/css/public/header/search.scss';
</style>
