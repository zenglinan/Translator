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
    let oriLangItem = this.data.langList[this.data.originLangIndex[0]] // 源语言对象
    let tarLangItem = this.data.langList[this.data.targetLangIndex[0]] // 指定语言对象
    let origin = `${oriLangItem.title}`
    let target = `${tarLangItem.title}`
    translate(this.data.query || ' ', {
        from: origin,
        to: target
      })
      .then(res => {
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
        } else {
          this.setData({
            'result': ''
          })
        }
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
  copy(e){
    let copyText = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: copyText
    })
  },
  onLoad(res) {
    if (Object.keys(res).length != 0) {
      console.log('here')
      let fromLangIndex = this.data.langList.findIndex((item) => {
        return item.name === res.from
      }) // 传参过来的语言，通过 title 过滤出 langList 中的 name 值
      let toLangIndex = this.data.langList.findIndex((item) => {
        return item.name === res.to
      })
      console.log(fromLangIndex)
      console.log(toLangIndex)
      this.setData({
        query: res.origin,
        result: res.target,
        originLangIndex: [fromLangIndex],
        targetLangIndex: [toLangIndex]
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
})