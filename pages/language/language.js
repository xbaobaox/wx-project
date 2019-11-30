// pages/language/language.js
Page({
  data: {
    showTips: false,
    focus: [{
      image: '../../image/前端.png',
      name: '前端',
      tips: '最贴近用户、最贴心产品',
      content:'前端基础、vue、react、Node等'
    },],
    unfocused: [{
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
    let arr = e.currentTarget.dataset.arr;
    let anArr = e.currentTarget.dataset.anarr;
    if (arr.length == 1) {
      index = 100
      this.setData({
        showTips: true
      })
    }
    let addItem = anArr.concat(arr.splice(index, 1));
    this.setData({
      focus: arr,
      unfocused: addItem
    })
    wx.setStorage({
      key: "menu",
      data: JSON.stringify(this.data.focus)
    })
  },
  unfocusedTap(e) {
    const index = e.currentTarget.dataset.index;
    let arr = e.currentTarget.dataset.arr;
    let anArr = e.currentTarget.dataset.anarr;
    let addItem = anArr.concat(arr.splice(index, 1));
    this.setData({
      focus: addItem,
      unfocused: arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})