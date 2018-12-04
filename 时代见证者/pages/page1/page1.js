// pages/page1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con:false,
    imgs: [
      {
        url: app.globalData.host + "videos/index.gif"
      }
    ],
    videoSrc: "http://pixwlubu5.bkt.clouddn.com/%E7%89%87%E5%A4%B4.mp4"
  },

  end:function(){
    wx.redirectTo({
      url: '../page2/page2',
    })
  },
  touchVideo:function(){
    wx.redirectTo({
      url: '../page2/page2',
    })
  },

  play: function(){
    console.log("play");
  },

  wait: function() {
    console.log("wait");
  },

  process: function(event) {
    console.log(event.detail.buffered);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.redirectTo({
      url: '../page2/page2'
    })
  }
})