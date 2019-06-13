Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [],
    num: undefined,
    ifClear: false
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

  }
})