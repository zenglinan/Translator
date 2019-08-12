import {sha256} from 'js-sha256'

const appKey = "04c42a377fc84857"
const key = "QTLcjXokxom2jdCSEdVPfYWiXcW0yRrE"
const curtime = Math.round(new Date().getTime() / 1000)
const baseUrl = "https://openapi.youdao.com/"
let salt = Math.floor(Math.random() * 10000)

export function translateText() {
  return new Promise((resolve, reject) => {
    const q = decodeURI(encodeURI('早上好'))   // 文本
    const url = "api"
    let data = {
      q,
      from: "auto",
      to: "auto",
      appKey,
      salt,
      sign: sha256(`${appKey}${q}${salt}${curtime}${key}`),
      signType: "v3",
      curtime
    }
    wx.request({
      url: baseUrl + url,
      data,
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
        wx.showToast({
          title: '网络异常',
          icon: 'loading',
          duration: 3000
        })
      }
    })
  })
}

export function translateVoice() {
  return new Promise((resolve, reject) => {
    const url = "speechtransapi"
    let q   // 音频文件
    let data = {
      q,
      from: "auto",
      to: "auto",
      appKey,
      salt,
      sign: sha256(`${appKey}${q}${salt}${curtime}${key}`),
      signType: "v3",
      curtime
    }
    wx.request({
      url: baseUrl + url,
      data,
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
        wx.showToast({
          title: '网络异常',
          icon: 'loading',
          duration: 3000
        })
      }
    })
  })
}
