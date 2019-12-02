<template>
  <div>
    <span>按省份选择：</span>
    <m-select
      :list="provinceList"
      :value="province"
      titile="省份"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change='changeProvince'
      className="province"
      
    />
    <m-select
      :list="cityList"
      :value="city"
      titile="城市"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change='changeCity'
      :disabled='cityDisabled'
      className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from '@/api/index.js'

export default {
  data() {
    return {
      province: "省份",
      city: "城市",
      provinceList: [],
      cityList: [],
      searchList: ["广州", "深圳", "哈尔滨", "四川", "重庆", "武汉"],
      searchWord: "",
      provinceActive: false,
      cityActive: false,
      loading: false,
      cityDisabled: true
    };
  },
  created(){
    // 获取省份列表
    api.getProvince().then(res => {
      // 赋值省份
      this.provinceList = res.data.data.map((item, index) => {
        item.name = item.provinceName;
        return item;
      });
    })
  },
  components: {
    MSelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item) {
      this.province = item.name
      this.cityDisabled = false
      // 赋值城市
      this.cityList = item.cityInfoList;
    },
    changeCity(item){
      this.city = item.name
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})
    },
    remoteMethod(val){
        // 请求后端接口
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changeCity/iselect.scss";
</style>