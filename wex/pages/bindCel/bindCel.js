var interval = null //倒计时函数

Page({
    data: {
        value1: '',
        value2: '',
        timerOnOff: true,
        timer: "null",
        time: 60,
        focus: false,
        inputValue: '',
        date: '请选择日期',
        fun_id: 2,
        time: '获取验证码', //倒计时 
        currentTime: 60,
        userPhone: '',
        hint: true,
        bb: "1123456"
    },

    codeClick: function (e) {
        //倒计时   
        var that = this;
        var currentTime = that.data.currentTime
        interval = setInterval(function () {
            currentTime--;
            that.setData({
                time: currentTime + '秒'
            })
            if (currentTime <= 0) {
                clearInterval(interval)
                that.setData({
                    time: '重新发送',
                    currentTime: 61,
                    disabled: false
                })
            }
        }, 1000)
    },
    getVerificationCode() {

        if (this.data.userPhone === "" || this.data.userPhone === null) {
            console.log("不能为空！！")
            this.setData({
                hint: false
            })
        } else {
            this.codeClick();
            var that = this
            that.setData({
                disabled: true,
                hint: true
            })
        }
    },

    goDetail: function (e) {
        this.setData({
            userPhone: e.detail.value
        })
    },

    ohShitfadeOut() {
        var fadeOutTimeout = setTimeout(() => {
            this.setData({ popErrorMsg: '' });
            clearTimeout(fadeOutTimeout);
        }, 3000);
    }, 
 


})