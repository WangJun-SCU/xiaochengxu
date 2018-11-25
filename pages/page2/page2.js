// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "亲爱的朋友，感谢您与新华社一同见证改革开放的征途，见证祖国日新月异的发展，感谢您始终不忘初心，砥砺前行，与神州大地共同成长。新华社将为您颁发“时代见证者荣誉证书”，点击下方按钮立即申请！",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      
    })
  },
  apply: function() {
    wx.navigateTo({
      url: '../page3/page3',
    })
  }
  
})