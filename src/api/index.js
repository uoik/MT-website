import axios from '@/axios.js'

var api = {
  // 请求最近热门搜索
  searchHotWords () {
    return axios.get('/api/meituan/header/searchHotWords.json')
  },
  // 搜索框列表数据获取
  getSearchData () {
    return axios.get('/api/meituan/header/search.json')
  },
  // 首页左侧导航条 导航数据
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 首页下方（有格调内容区数据获取）
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 产品展示列表数据获取
  getGoodsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  // 推荐产品列表
  getRecommend () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  // 产品列表详情页
  getDetail () {
    return axios.get('/api/meituan/product/detail.json')
  },
  // 获取城市列表接口
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  // 获取热门城市接口
  getCityHot () {
    return axios.get('/api/meituan/city/hot.json')
  },
  // 获取省份列表
  getProvince () {
    return axios.get('/api/meituan/city/province.json')
  },
  // 最近搜索城市
  getRecents () {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 获取当前地理位置信息
  getPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  // 用户登陆接口
  login (params) {
    return axios.get('/api/meituan/login', {params})
  },
  // 用户注册接口
  register (params) {
    return axios.get('/api/meituan/register', {params})
  }
}

export default api
