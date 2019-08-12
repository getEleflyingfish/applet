Page({
    data: {
        collSrc: '../images/tel_03.png',
        hidden: true,
      
    },
    tapDownload() {
        const hidden = !this.data.hidden;
        this.setData({
            hidden
        })
    }
})