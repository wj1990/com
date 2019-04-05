Component({
  properties: {
    obj: {
      type: Object,
      value: {},
      observer(newData){
        this.upData(newData)
      }
    }
  },
  data: {
    listArr:[]
  },
  methods: {
    //路由跳转
    itemClick(e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/details/details?id=' + id
      })
    },
    upData(newData){
      this.setData({
        listArr: newData
      })
    }
  }
})