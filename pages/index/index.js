//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    subjects: [],
    start: 0,
    count: 9,
    total: 0
  },
  onLoad: function() {
    //调用豆瓣top250 api数据
    this.getPageDate(this.data.start, this.data.count)
  },
  //请求指定页码数据封装
  getPageDate(start, count) {
    let me = this;
    wx.showLoading();
    wx.request({
      url: 'http://t.yushu.im/v2/movie/coming_soon',
      method: 'GET',
      data: {
        start,
        count
      },
      header: {
        "Content-Type": "application/xml"
      },
      success: function(res) {
        let oldList = me.data.subjects;
        let newList = oldList.concat(res.data.subjects);
        wx.hideLoading();
        me.setData({
          subjects: newList,
          total: res.data.total,
          start
        })
      },
      fail: function(err) {
        wx.hideLoading();
      }

    })
  },
  //下拉触底
  onReachBottom() {
    let {
      total,
      count,
      start
    } = this.data
    // 以及检查当前请求页数是不是小于数据总页数，如符合条件，则发送请求
    if (start < (total / count)-1) {
      this.getPageDate(start + 1, count)
    }
  }
})