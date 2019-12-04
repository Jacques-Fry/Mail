import { request } from './request'

export function getHomeData() {
  return request({
    url: ''
  })
}


export function getJoke() {
  return request({
    url: 'https://autumnfish.cn/api/joke'
  })
}


export function getWeather(city) {
  return request({
    url: 'http://wthrcdn.etouch.cn/weather_mini',
    params:{
      city: city
    }
    
  })
}