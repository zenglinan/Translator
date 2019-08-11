const url = "https://openapi.youdao.com/api"
const appKey = "04c42a377fc84857"
const key = "QTLcjXokxom2jdCSEdVPfYWiXcW0yRrE"
module.exports = function translate(){
  return new Promise((resolve,reject)=>{
    const curtime = Math.round(new Date().getTime()/1000)
    let salt = new Date()
    let data = {
      q: "你好",
      from: "auto",
      to: "auto",
      appKey,
      salt,
      sign: `sha256(${appKey}"你好"${salt}${curtime}${key})`,
      signType: "v3",
      curtime
    }
    wx.request({
      url,
      data,
      success(res){
        resolve(res)
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
