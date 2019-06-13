import md5 from './md5.js'

const appid = '20190202000262191';
const key = 'SDyRxXqkYsApIGWhCVog';

function translate(q, {
  from = "auto",
  to = "en"
} = {}) {
  return new Promise((reslove, reject) => {
    let salt = Date.now()
    let sign = md5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      method: 'GET',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res) {
        reslove(res.data)
      },
      fail(res){
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
module.exports.translate = translate