import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://6s.net579.com:22875',
    timeout: 5000
  })

  //axios拦截器
  //请求拦截
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err)
    this.$toast.show('网络异常')
  })

  //响应拦截
  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err)
    this.$toast.show('网络异常')
  })

  //发送网络请求
  return instance(config)
}

