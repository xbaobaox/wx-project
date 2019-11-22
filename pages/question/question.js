// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: '2019-11',
    subject: []
  },
  bindDateChange(e) {
    this.setData({
      data: e.detail.value
    }),
      wx.request({
        url: 'https://www.shuipingguo.com/interview/get_qrecord',
        method: 'get',
        data: {
          month: this.data.data
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          "cookie": "oid=oO_UR0ZNNuoD-11Mk1QWcvkO5X7g"
        },
        success: (res) => {
          this.setData({
            subject: res.data.data
          })
          // console.log(this.data.data)
          console.log(res.data.data.length);
        },
        fail: function (e) {

        },
        complete(e) {

        }
      })
  },
  onLoad: function () {
    wx.request({
      url: 'https://www.shuipingguo.com/interview/get_qrecord',
      method: 'get',
      data: {
        month: "2019-10"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        "cookie": "oid=oO_UR0ZNNuoD-11Mk1QWcvkO5X7g"
      },
      success: (res) => {
        this.setData({
          subject: res.data.data
        })

        console.log(res.data.data);
      },
      fail: function (e) {

      },
      complete(e) {

      }
    })
  }

})