Page({
    data: {
        collSrc: '../images/tel_03.png',
        left:'-100%',

    },
    tapDownload: function () {
        console.log("111111")
         this.setDate({ 
            left:'0%'
         }) 
         this.left='0%'

    }
})