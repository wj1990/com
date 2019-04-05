Component({
  properties: {
    obj: {
      type: Object,
      value: {},
      observer(newData){
        if (newData){
          this.upDate(newData)
        }
      }
    }
  },
  data: {
    normalArr: [],
    activeArr: [],
    score: 0
  },
  methods: {
    upDate(newData) {
      let normalArr = [];
      let activeArr = [];
      let score = 0;
      let rate = newData.average / newData.max;
      let num = Math.floor(rate * 5);
      activeArr.length = num;
      normalArr.length = 5 - num;
      score = (rate * 100 / 10).toFixed(1);
      this.setData({
        normalArr,
        activeArr,
        score
      })
    }
  }
})