Page({
  data: {
    subjects: [],
    inputValue:''
  },
  onLoad: function (options) {

  },
  inputEvent(e){
    let value = e.detail.value;
    this.setData({
      inputValue: value
    })
    if (value.trim().length==0){
      this.setData({
        subjects: []
      })
      return
    }
    this.getPageDate(value, 0, 20);
  },
  //请求指定页码数据封装
  getPageDate(value,start, count) {
    let me = this;
    wx.showLoading();
    wx.request({
      url: 'http://t.yushu.im/v2/movie/search',
      method: 'GET',
      data: {
        q: value,
        count,
        start
      },
      header: {
        "Content-Type": "application/xml"
      },
      success: function (res) {
        let newList = res.data.subjects;
        wx.hideLoading();
        me.setData({
          subjects: newList
        })
      },
      fail: function (err) {
        wx.hideLoading();
        console.log(err)
      }
    })
  },
  clearEvent(){
    this.setData({
      inputValue: '',
      subjects: []
    })
  }
})