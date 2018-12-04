// pages/page2/page2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "时代见证者荣誉证书",
    content: '改革开放四十年\n每一个瞬间你我共同见证\n中国传媒大学为您颁发\n"时代见证者荣誉证书"\n点击下方按钮立即领取',
    imgSrc: app.globalData.host + "imgs/icon.png",
    imgSrc2: app.globalData.host + "imgs/icon_make.png",
    imgSrc3: app.globalData.host + "imgs/bottom1.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.animation = wx.createAnimation()
    var next = true;
    let that = this;
    setInterval(function() {
      if (next) {
        that.animation
          .scale(1.1)
          .step()
        that.setData({
          animation: that.animation.export()
        })
      } else {
        that.animation
          .scale(1 / 1.1)
          .step()
        that.setData({
          animation: that.animation.export()
        })
      }
      next = !next;
    }, 500)
  },
  apply: function() {
    wx.redirectTo({
      url: '../page3/page3',
    })
  }

})