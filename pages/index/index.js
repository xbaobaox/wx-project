//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    // nav: [{name: '最新发布' }, { name: '最近开始'},{ name: '最热门'}],
    // x: 0
    myLan:[]
  },
  onLoad() {
    this.setData({
      slideButtons: [{
        type: 'warn',
        text: '取消关注',
        extClass: 'text'
      }]
    })
    
  },
  slideButtonTap(e) {
    // console.log(e)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
   
    wx.getStorage({
      key: "menu",
      success:res => {
        this.setData({
          myLan: JSON.parse(res.data)
        })
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
   
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})