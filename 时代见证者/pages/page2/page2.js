// pages/page2/page2.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "时代见证者荣誉证书",
    content: '改革开放四十年，国社记录四十载\n新华社为您颁发"时代见证者荣誉证书"\n点击下方按钮立即领取！',
    imgSrc: app.globalData.host + "imgs/icon.jpeg",
    imgSrc2: app.globalData.host + "imgs/icon_make.png",
    imgSrc3: app.globalData.host + "imgs/bottom1.png",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      
    })
  },
  apply: function() {
    wx.redirectTo({
      url: '../page3/page3',
    })
  }
  
})