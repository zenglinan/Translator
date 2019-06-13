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
        title: 'wyw	'
      },
      {
        name: '日语',
        title: 'jp'
      }
    ], // 语言列表
    query: '', // 需要翻译的文本
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
    console.log(translate)
    translate(this.query,{from: 'zh',to:'en'})
    .then(res=>{console.log(res)})
  },
  onTargetLangChnage(e) {
    this.setData({
      'targetLangIndex': e.detail.value
    })
  },
  onOrignLangChnage() {
    this.setData({
      'originLangIndex': e.detail.value
    })
  },
  clear() {
    wx.hideKeyboard()
    this.setData({
      query: '',
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