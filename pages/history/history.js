Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [],
    num: undefined,
    ifClear: false
  },
  toIndex(e) {
    let data = e.currentTarget.dataset
    if (e.target.id !== "deleteIcon") {
      wx.reLaunch({
        url: `../index/index?origin=${data.origin}&target=${data.target}&from=${data.from}&to=${data.to}`,
      })
    }
  },
  onShow: function() {

    this.setData({
      history: wx.getStorageSync('history'),
    })
  },
  onDelete(e) {
    this.setData({
      num: e.target.dataset.index
    })
    let deleteIndex = e.target.dataset.index
    let history = wx.getStorageSync('history')
    history.splice(deleteIndex, 1)
    console.log(history)
    wx.setStorageSync('history', history)
    this.setData({
      history: wx.getStorageSync('history'),
    })
  },
  clearAll() {
    wx.showModal({
      title: "提示",
      content: "是否清空历史记录？",
      showCancel: true,
      cancelText: "取消",
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('history')
          this.setData({
            history: wx.getStorageSync('history'),
          })
        }

      }
    })

  },
})