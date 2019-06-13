import md5 from './md5.js'

const appid = '20190202000262191';
const key = 'SDyRxXqkYsApIGWhCVog';

function translate(q, {
  from = "auto",
  to = "en"
} = {}) {
  return new Promise((reslove, reject) => {
    let salt = new Date()
    let sign = md5(`${appid}${q}${salt}${key}`)
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      method: 'GET',
      data: {
        from,
        to,
        salt,
        sign
      },
      success(res) {
        reslove(res)
      },
      fail(res){
        reject(res)
      }
    })
  })
}
module.exports.translate = translate