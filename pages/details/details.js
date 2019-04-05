
Page({
  data: {
    item:{},
    castsImgs: [],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imageWidth: wx.getSystemInfoSync().windowWidth/2.5,//图片宽度
  },
  onLoad: function (options) {
    let me = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/subject/' + options.id,
      method: 'GET',
      data: null,
      header: {
        "Content-Type": "application/xml"
      },
      success: function (res) {
        //数据二次处理 没找到过滤器方法
        res.data.director = me.doDirector(res.data.directors);//导演
        res.data.castsHandle = me.doDirector(res.data.casts);//影人
        res.data.summary = res.data.summary.split('\\n').join('');//剧情简介
        res.data.castsImgs = me.doCastsImg(res.data.casts);//影人照片
        me.setData({
          item: res.data,
          castsImgs: res.data.castsImgs
        })
      },
      fail: function (err) {
        console.log(err)
      }

    })
  },
  //处理导演
  doDirector(arr){
    let director = arr.reduce((init, cur) => {
      return init + cur.name + ' '
    }, '')
    return director
  },
  //处理影人照片
  doCastsImg(arr) {
    let castsImgs = arr.reduce((init,cur) => {
      init.push(cur.avatars.large)
      return init
    }, [])
    return castsImgs
  }
})