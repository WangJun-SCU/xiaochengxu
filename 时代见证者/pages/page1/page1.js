// pages/page1.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    con: false,
    imgs: [{
        url: app.globalData.host + "videos/index.gif"
      },
      {
        url: "https://i.loli.net/2018/12/11/5c0f643f051dc.gif"
      }
    ],
    imgSrc: "../../resources/image/index.png"
    //videoSrc: "http://pixwlubu5.bkt.clouddn.com/%E7%89%87%E5%A4%B4.mp4"
  },

  end: function() {
    wx.redirectTo({
      url: '../page2/page2',
    })
  },
  touchVideo: function() {
    wx.redirectTo({
      url: '../page2/page2',
    })
  },

  play: function() {
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
  onHide: function() {
    wx.redirectTo({
      url: '../page2/page2'
    })
  },

  // onReady: function() {
  //   setTimeout(function(){
  //     wx.redirectTo({
  //       url: '../page2/page2'
  //     })
  //   },5000)
  // }
  onLoad: function() {
    wx.showLoading({
      title: '精彩即将开始...',
    })
  },

  imgLoaded: function() {
    wx.hideLoading();
    setTimeout(function() {
      wx.redirectTo({
        url: '../page2/page2'
      })
    }, 5000)
  }
})