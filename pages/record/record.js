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
    answersA: [],
    answersB: [],
    answersC: [],
    answersD: []
    
  },
  openConfirm(e) {
    this.setData({
      dialogShow: true,
      itemContent: e.currentTarget.dataset.item.name,
      details: e.currentTarget.dataset.item.details,
      answersA: e.currentTarget.dataset.item.answers[0].name,
      answersB: e.currentTarget.dataset.item.answers[1].name,
      answersC: e.currentTarget.dataset.item.answers[2].name,
      answersD: e.currentTarget.dataset.item.answers[3].name,
    })
    console.log(e.currentTarget.dataset.item.answers[0].name)
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
          console.log(res.data.data.length);
        },
        fail: function(e) {

        },
        complete(e) {

        }
      })
  },
  onLoad: function() {
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
      fail: function(e) {

      },
      complete(e) {

      }
    })
  }

})