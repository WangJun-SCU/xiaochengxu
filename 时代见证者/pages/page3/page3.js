// pages/page3/page3.js
import WeCropper from '../../utils/we-cropper/we-cropper.js'
const app = getApp()

const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "qqq",
    date: "",
    img: "",
    load: false,
    make: "开始制作",
    backgroundSrc: app.globalData.host + "imgs/background1.png",
    startDate: "1890-01-01",
    endDate: new Date(),
    cropperOpt: {
      id: 'cropper',
      width,
      height: height * 0.3,
      scale: 2.5,
      zoom: 8,
      cut: {
        x: (width - (height * 0.3)) / 2,
        y: 0,
        width: height * 0.3,
        height: height * 0.3
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const {
      cropperOpt
    } = this.data

    new WeCropper(cropperOpt)
      .on('ready', (ctx) => {
        console.log(`wecropper is ready for work!`)
      })
      .on('beforeImageLoad', (ctx) => {
        console.log(`before picture loaded, i can do something`)
        console.log(`current canvas context:`, ctx)
        wx.showToast({
          title: '上传中',
          icon: 'loading',
          duration: 2000
        })
      })
      .on('imageLoad', (ctx) => {
        console.log(`picture loaded`)
        console.log(`current canvas context:`, ctx)
        wx.hideToast()
      })
  },
  //出生日期
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //姓名
  changeName: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  //选择图片
  selectImg: function() {
    let that = this;
    wx.chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0]
        that.wecropper.pushOrign(tempFilePaths)
        that.setData({
          img: tempFilePaths
        })
      }
    })
  },
  //开始制作
  changeLoad: function() {
    if (this.data.name == "" || this.data.date == "" || this.data.img == "") {
      wx.showToast({
        title: '请将信息填写完整',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    var start = parseInt(this.data.startDate.substring(0, 4));
    var end = parseInt(this.data.endDate.substring(0, 4));
    var select = parseInt(this.data.date.substring(0, 4));
    if (select < start || select > end) {
      wx.showToast({
        title: '请选择合法出生日期：1890-' + end,
        icon: 'none',
        duration: 2000
      })
      return;
    }
    let that = this;
    this.wecropper.getCropperImage((avatar) => {
      if (avatar) {
        //  获取到裁剪后的图片
        that.setData({
          load: false,
          make: "开始制作"
        })
        wx.redirectTo({
          url: `../page4/page4?avatar=${avatar}&name=${that.data.name}&date=${that.data.date}`
        })
      } else {
        console.log('获取图片失败，请稍后重试')
      }
    })
  },
  touchStart(e) {
    this.wecropper.touchStart(e)
  },
  touchMove(e) {
    this.wecropper.touchMove(e)
  },
  touchEnd(e) {
    this.wecropper.touchEnd(e)
  }
})