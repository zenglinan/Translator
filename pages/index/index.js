import {
  translate
} from '../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    langList: [{
        name: '中文',
        title: 'zh'
      },
      {
        name: '英语',
        title: 'en'
      },
      {
        name: '粤语',
        title: 'yue'
      },
      {
        name: '文言文',
        title: 'wyw'
      },
      {
        name: '日语',
        title: 'jp'
      }
    ], // 语言列表
    query: '', // 需要翻译的文本
    result: '',
    hideClearIcon: true, // 是否隐藏一键清空的x的标志位
    originLangIndex: [0], // 源语言的索引数组
    targetLangIndex: [1] // 要翻译的语言的索引数组
  },
  onInput(e) {
    this.setData({
      query: e.detail.value,
    })
    if (this.data.query.length > 0) { // 展示和隐藏 x
      this.setData({
        'hideClearIcon': false
      })
    } else {
      this.setData({
        'hideClearIcon': true
      })
    }
  },
  onConfirm() {
    let oriLangItem = this.data.langList[this.data.originLangIndex[0]]  // 源语言对象
    let tarLangItem = this.data.langList[this.data.targetLangIndex[0]] // 指定语言对象
    let origin = `${oriLangItem.title}`
    let target = `${tarLangItem.title}`
    translate(this.data.query || ' ', {
        from: origin,
        to: target
      })
      .then(res => {
        console.log(res)
        if (res.trans_result) {
          this.setData({
            'result': res.trans_result[0]['dst']
          })
          let history = wx.getStorageSync('history') || []
          history.unshift({
            from: `${oriLangItem.name}`,
            to: `${tarLangItem.name}`,
            origin: res.trans_result[0]['src'],
            target: res.trans_result[0]['dst']
          })
          wx.setStorageSync('history', history)
          console.log(history)
        } else {
          this.setData({
            'result': ''
          })
        }

        console.log(this.data)
      })
  },
  onTargetLangChnage(e) {
    this.setData({
      'targetLangIndex': e.detail.value
    })
    this.onConfirm()
  },
  onOrignLangChnage(e) {
    this.setData({
      'originLangIndex': e.detail.value
    })
    this.onConfirm()
  },
  clear() {
    wx.hideKeyboard()
    this.setData({
      query: '',
      result: '',
      hideClearIcon: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
})