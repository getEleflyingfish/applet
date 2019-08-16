Page({
    data: {
        collSrc: '../images/tel_03.png',
        hidden: true,
        indentArr: [
            {

                "idx": "123548",
                "waybill": '11856532165',
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
                title: "单价",
            },
            {
                title: "数量",
            }

        ]
        ,
        attrs: [
            {
                "id": "1",
                "classify": "蔬菜",
                "commodity": "土豆",
                "specification": "散装",
                "unit": "2.00",
                "count": "20"
            },
            {
                "id": "2",
                "classify": "蔬菜",
                "commodity": "黄瓜",
                "specification": "散装",
                "unit": "2.00",
                "count": "20"
            },
            {
                "id": "3",
                "classify": "蔬菜",
                "commodity": "西红柿",
                "specification": "散装",
                "unit": "2.00",
                "count": "20"
            },
            {
                "id": "4",
                "classify": "蔬菜",
                "commodity": "白菜",
                "specification": "散装",
                "unit": "2.00",
                "count": "20"
            }
        ],
        imgUrl: '../images/icon-r_35.png',

        finished: '已确认',
        putInBalance: '知道了',
        hidden:true

    },
    tapDownload() {
        const hidden = !this.data.hidden;
        this.setData({
            hidden
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