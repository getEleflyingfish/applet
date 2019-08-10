Page({
    data: {
        collSrc: '../images/tel_03.png',
        hidden: true,
        dataArr: [
            {
                title: "条目",
                list: [{
                    listId: 1,
                    listId: 2
                }]
            },
            {
                title: "分类",
                list: [{
                    listClass: "蔬菜",
                    listClass: "蔬菜"
                }]
            }
        ]
    },
    tapDownload() {
        const hidden = !this.data.hidden;
        this.setData({
            hidden
        })
    }
})