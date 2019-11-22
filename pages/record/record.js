// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: '2019-11-01',
    fuck:0
  },
  bindDateChange(e){
    this.setData({
      data:e.detail.value
    })
  },
  onLoad:function(){
    wx.request({
      url: 'https://www.shuipingguo.com/interview/get_qrecord',
      method: 'get',
      header: {
        // 'content-type':'application/json'
      },
      success: (res) => {
        this.setData({
          fuck:res.data.retcode
        })
        
        console.log(res);
      },
      fail: function (e) {
        
      },
      complete(e) {
        
      }
    })
  }
  
})