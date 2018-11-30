// pages/page4/page4.js
const app = getApp()
const device = wx.getSystemInfoSync()
const width = device.windowWidth
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: app.globalData.host + "imgs/1980经济特区.jpeg",
    text: "1978年十一届三中全会召开，改革开放的伟大征程由此起步。",
    textSrc: app.globalData.host + "imgs/text_ryzs.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let that = this;
    wx.getImageInfo({
      src: "https://i.loli.net/2018/11/29/5c0005511deb0.jpg",
      success: function(file) {
        console.log(file);
        that.data.imgSrc = file.path;
        // 使用 wx.createContext 获取绘图上下文 context
        var context = wx.createCanvasContext('canvasImage');
        context.drawImage(that.data.imgSrc, 0, 0, width - 20, 200);
        context.draw(true)
      }
    })
    wx.getImageInfo({
      src: 'https://i.loli.net/2018/11/29/5c000884a15de.png',
      success: function(file){
        that.data.textSrc = file.path;
        // 使用 wx.createContext 获取绘图上下文 context
        var context = wx.createCanvasContext('canvasImage');
        context.drawImage(that.data.textSrc, 40, 260, width - 100, 90);
        context.setFontSize(18)
        //绘制字符换行处理
        var chr = that.data.text.split("");//这个方法是将一个字符串分割成字符串数组
        var temp = "";
        var row = [];
        context.setFillStyle("#000")
        for (var a = 0; a < chr.length; a++) {
          if (context.measureText(temp).width < (width - 100)) {
            temp += chr[a];
          } else {
            a--; //这里添加了a-- 是为了防止字符丢失，效果图中有对比
            row.push(temp);
            temp = "";
          }
        }
        row.push(temp);
        for (var b = 0; b < row.length; b++) {
          context.setFillStyle('dimgrey')
          context.fillText(row[b], 30, 400 + b * 30);
        }
        context.draw(true)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})