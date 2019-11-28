// pages/question/question.js
Page({
  data: {
    data: '2019-11',
    subject: [],
    dialogShow: false,
    confirm: [{
      text: '确定'
    }],
    itemContent: '',
    details: '',
    answersA: {},
    answersB: {},
    answersC: {},
    answersD: {},
    rightAnswer:{},
    myAnswer:{}
  },
  openConfirm(e) {
    this.setData({
      dialogShow: true,
      itemContent: e.currentTarget.dataset.item.name,
      details: e.currentTarget.dataset.item.details,
      rightAnswer: e.currentTarget.dataset.item.right_answer,
      myAnswer:e.currentTarget.dataset.item.my_answer,
      answersA: e.currentTarget.dataset.item.answers[0],
      answersB: e.currentTarget.dataset.item.answers[1],
      answersC: e.currentTarget.dataset.item.answers[2],
      answersD: e.currentTarget.dataset.item.answers[3],
    })
  },
  tapDialogButton(){
    this.setData({
      dialogShow:false
    })

  },
  bindDateChange(e) {
    this.setData({
        data: e.detail.value
      }),
      wx.request({
        url: 'https://www.shuipingguo.com/interview/question_record',
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
        },
        fail: function(e) {

        },
        complete(e) {

        }
      })
  },
  onLoad: function() {
    wx.request({
      url: 'https://www.shuipingguo.com/interview/question_record',
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
      },
      fail: function(e) {

      },
      complete(e) {

      }
    })
  }

})