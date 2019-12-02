<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼英首字母选择：</dt>
      <dd v-for="item in list" :key="item.id">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl
      v-for="(item, index) in cityList"
      :key="index"
      class="m-categroy-section"
      :id="'city-' + index"
    >
      <dt>{{ index }}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{ city.name }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: {}
    };
  },
  created() {
    // 获取城市列表接口
    api.getCityList().then(res => {
      let obj = {};
    // 通过首字母区分城市
    res.data.data.forEach((item, index) => {
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = [];
      }
      obj[item.firstChar.toUpperCase()].push(item);
    });
    this.cityList = this.objKeySort(obj);
    })
  },
  methods: {
    // 点击切换城市
    changeCity(item) {
      console.log(item)
      this.$store.dispatch('setPosition', item)
      this.$router.push({name: 'index'})
    },
    objKeySort(obj) {
      //【1】用Object内置类的keys方法获取要排序对象的属性名
      //【2】用Array原型上的sort方法对获取的属性名进行排序，返回一个新数组newkey
      var newkey = Object.keys(obj).sort();
      var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
      for (var i = 0; i < newkey.length; i++) {
        //遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对 ，
        //newObj[newkey[i].toLowerCase()] = obj[newkey[i]]; 并大写转换小写【做签名验证会用】
      }
      return newObj; //返回排好序的新对象
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/changecity/category.scss";
</style>