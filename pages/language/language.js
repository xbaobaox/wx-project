// pages/language/language.js
Page({
  data: {
    showTips: false,
    myLan: [{
      image: '../../image/前端.png',
      name: '前端'
    }],
    myOtherLan: [{
        image: '../../image/python.png',
        name: 'Python'
      },
      {
        image: '../../image/java.png',
        name: 'Java'
      },
      {
        image: '../../image/_mysql.png',
        name: 'MySQL'
      },
      {
        image: '../../image/大数据.png',
        name: '大数据'
      },
      {
        image: '../../image/Android.png',
        name: 'Android'
      },
      {
        image: '../../image/ios.png',
        name: 'ios'
      },
    ]
  },

  focusTap(e) {
    let index = e.currentTarget.dataset.index;
    if (this.data.myLan.length == 1) {
      index = 100
      this.setData({
        showTips: true
      })
    }
    let arrA = this.data.myLan.splice(index, 1)
    this.setData({
      myLan: this.data.myLan,
      myOtherLan: this.data.myOtherLan.concat(arrA)
    })
    wx.setStorage({
      key: "menu",
      data: JSON.stringify(this.data.myLan)
    })
    wx.setStorage({
      key: "menuOther",
      data: JSON.stringify(this.data.myOtherLan)
    })
    return
    let addItem = otherLan.concat(lan.splice(index, 1));
    console.log(lan)
    this.setData({
      myLan: lan,
    })
    wx.setStorage({
      key: "menu",
      data: JSON.stringify(this.data.focus)
    })
    wx.setStorage({
      key: "menuOther",
    })
  },
  unfocusedTap(e) {
    let index = e.currentTarget.dataset.index;
    let arrB = this.data.myOtherLan.splice(index, 1)
    this.setData({
      myOtherLan: this.data.myOtherLan,
      myLan: this.data.myLan.concat(arrB)
    })
    wx.setStorage({
      key: "menu",
      data: JSON.stringify(this.data.myLan)
    })
    wx.setStorage({
      key: "menuOther",
      data: JSON.stringify(this.data.myOtherLan)
    })
    return
    let addItem = lan.concat(otherLan.splice(index, 1));
    this.setData({
      focus: addItem,
    })
    wx.setStorage({
      key: "menu",
      data: JSON.stringify(this.data.focus)
    })
    wx.setStorage({
      key: "menuOther",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getStorage({
      key: "menu",
      success: res => {
        this.setData({
          myLan: JSON.parse(res.data),
        })
      }
    })
    wx.getStorage({
      key: "menuOther",
      success: res => {
        this.setData({
          myOtherLan: JSON.parse(res.data),
        })
      }
    })
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

  }
})