
const app = getApp()
Page({
    data: {
        currentTab: 0,
        indentArr: [
            {

                "idx": "123548",
                "waybill": '11856532165',
                "sum": '742251',
                "day": '2019-07-11'
            }
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

        finished: '已确认',
        putInBalance: '知道了'

    },
    clickTab: function (e) {

        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current,
            })
        }
    },

    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            date: e.detail.value
        })
    },

    /*图标切换  */
    chooseImg: function (e) {
        this.setData({
            _idx: e.currentTarget.dataset.id,
        })
        if (e.currentTarget.dataset.id == 1) {
            this.setData({
                imgUrl: '../images/icon-t_42.png',
                hiddenName: false
            })
        } else if (e.currentTarget.dataset.id == 2) {
            this.setData({
                imgUrl: '../images/icon-t_42.png',
                hiddenName: false
            })
        }
        else {
            this.setData({
                imgUrl: '../images/icon-r_35.png',
                hiddenName: true
            })
        }
    },
    /* 列表加背景颜色 */
    menuClick: function (e) {

        this.setData({
            _num: e.currentTarget.dataset.num,
        })

    },



})