import axios from 'axios'

// 未迁移接口
axios.defaults.baseURL = 'http://open.duyiedu.com'

axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
//   console.log(config)
  config.params = {
    ...config.params,
    appkey: 'chenjianhui_1558881939419'
  }
  return config
}, (error) => {
  // 请求错误做些什么
  return Promise.reject(error)
})

export default axios
