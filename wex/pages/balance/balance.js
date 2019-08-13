Page({
  data: {
    date: '2016-09-01',
    indentArr: [
      {
        key: "序号 : ",
        text: '123548'
      },
      {
        key: "供货单编号 : ",
        text: '11856532165'

      },
      {
        key: "预单提醒 : ",
        text: '2019-07-11'

      },
      {
        key: "序号 : ",
        text: '2019-07-11'

      },
    ],

    kindArr: [
      {
        title: "条目"
      },
      {
        title: "分类",
      },
      {
        title: "商品名",
      },
      {
        title: "规格",
      },
      {
        title: "单位",
      },
      {
        title: "原数量",
      },
      {
        title: "变更数量",
      },
      {
        title: "实际数量",
      }
    ]
    ,

    attrs: [
      {
        "id": "1",
        "classify": "蔬菜",
        "commodity": "土豆",
        "specification": "散装",
        "unit": "斤",
        "count": "50",
        "alteration": "+5",
        "practical": "26",
      },
      {
        "id": "2",
        "classify": "蔬菜",
        "commodity": "黄瓜",
        "specification": "散装",
        "unit": "斤",
        "count": "50",
        "alteration": "+5",
        "practical": "20",
      },
      {
        "id": "3",
        "classify": "蔬菜",
        "commodity": "西红柿",
        "specification": "散装",
        "unit": "斤",
        "count": "50",
        "alteration": "+5",
        "practical": "21",
      },
      {
        "id": "4",
        "classify": "蔬菜",
        "commodity": "白菜",
        "specification": "散装",
        "unit": "斤",
        "count": "50",
        "alteration": "+5",
        "practical": "23",
      }
    ],



    imgUrl: '../images/icon-r_35.png',
    finished: '已结算',
    putInBalance: '申请结算'

  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  /*图标切换  */
  chooseImg: function (e) {
    console.log("-------d：" + this.data.imgUrl);
    if (this.data.imgUrl === "../images/icon-r_35.png") {
      this.setData({
        imgUrl: '../images/icon-t_42.png',
        finished: '申请结算',
        _sheet: !e.currentTarget.dataset.sheet

      })
    } else {
      this.setData({
        imgUrl: '../images/icon-r_35.png',
        finished: '已结算',
        _sheet: ""
      })
    }
  },
  /* 列表加背景颜色 */
  menuClick: function (e) {
    if (this.data.imgUrl === "../images/icon-t_42.png" || this.data.imgUrl === "../images/icon-r_35.png") {
      this.setData({
        _num: e.currentTarget.dataset.num,

      })
    } else {
      this.setData({
        _num: !e.currentTarget.dataset.num,

      })
    }
  }




})