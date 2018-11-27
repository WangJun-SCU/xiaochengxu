// pages/page3/page3.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    date: "",
    img: "",
    load: false,
    make: "开始制作",
    backgroundSrc: app.globalData.host + "imgs/background1.png",
    startDate:"1890-01-01",
    endDate:new Date()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  selectImg: function() {
    let that = this;
    wx.chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log("imgUrl:" + tempFilePaths);
        that.setData({
          img: tempFilePaths
        })
      }
    })
  },
  changeLoad: function() {
    this.setData({
      load: true,
      make: "新华社正在为您盖章，请稍等"
    })
    let that = this;
    setTimeout(function(){
      that.setData({
        load: false,
        make: "开始制作"
      })
      wx.navigateTo({
        url: '../page4/page4',
      })
    }, 2000)
  }
})