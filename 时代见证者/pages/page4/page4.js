// pages/page4/page4.js
const app = getApp()
//获取设备信息
const device = wx.getSystemInfoSync()
const width = device.windowWidth
const height = device.windowHeight
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgSrc: "",
    text: "1978年十一届三中全会召开，改革开放的伟大征程由此起步。",
    textSrc: "../../resources/image/text_ryzs.png",
    tagSrc: "../../resources/image/tag.gif",
    headSrc: "../../resources/image/qrcode1.png",
    name: "",
    date: "",
    doubleClick: false,
    imgs: [
      {
        "year": "1978",
        "image": "https://i.loli.net/2018/12/02/5c02cdd3733c6.jpg",
        "conent": "1978年十一届三中全会召开，改革开放的伟大征程由此起步。"
      },
      {
        "year": "1979",
        "image": "https://i.loli.net/2018/12/02/5c02cddc52cee.jpg",
        "conent": "1979年中美建交，对世界的和平和稳定有着重大的意义。"
      },
      {
        "year": "1980",
        "image": "https://i.loli.net/2018/12/02/5c02cddc691e7.jpg",
        "conent": "1980年经济特区正式成立，一座座城市开始崛起。"
      },

      {
        "year": "1981",
        "image": "https://i.loli.net/2018/12/02/5c02cddb757c1.jpg",
        "conent": "1981年中国女排首次获得世界冠军，女排精神感动无数国人。"
      },

      {
        "year": "1982",
        "image": "https://i.loli.net/2018/12/02/5c02cdded633b.jpg",
        "conent": "1982年家庭联产承包责任制确立，农村活力开始被激发。"
      },

      {
        "year": "1983",
        "image": "https://i.loli.net/2018/12/02/5c02cddac7b42.jpg",
        "conent": "1983年第一届央视春晚播出，从此中国人过年有了一个新习俗。"
      },
      {
        "year": "1984",
        "image": "https://i.loli.net/2018/12/02/5c02cdd8aa756.jpg",
        "conent": "1984年飞乐音响向社会发行一万股，这是中国第一支股票，被誉为改革开放的一个信号。"
      },
      {
        "year": "1985",
        "image": "https://i.loli.net/2018/12/02/5c02cddd65aa6.jpg",
        "conent": "1985年我国第一个南极科考站长城站建成，我国极地科考进入了一个新阶段。"
      },
      {
        "year": "1986",
        "image": "https://i.loli.net/2018/12/02/5c02cdda41b59.jpg",
        "conent": "1986年863计划启动，为中国高技术领域的腾飞打下基础。"
      },
      {
        "year": "1986",
        "image": "https://i.loli.net/2018/12/02/5c02cffc33155.jpg",
        "conent": "1986年央视西游记开播，成为亿万中国人的集体记忆。"
      },
      {
        "year": "1986",
        "image": "https://i.loli.net/2018/12/02/5c02cdd88c62b.jpg",
        "conent": "1986年全民所有制企业改革，改革的核心是适应市场经济。"
      },
      {
        "year": "1987",
        "image": "https://i.loli.net/2018/12/02/5c02cffabc0bf.jpg",
        "conent": "1987年肯德基在北京营业，中国大陆快餐时代正式开始。"
      },
      {
        "year": "1987",
        "image": "https://i.loli.net/2018/12/02/5c02cff9acef0.jpg",
        "conent": "1987年十三大提出“一个中心，两个基本点”，为改革开放指明了方向。"
      },
      {
        "year": "1988",
        "image": "https://i.loli.net/2018/12/02/5c02cfffbae63.jpg",
        "conent": "1988年海南设省，并成为中国最大的经济特区。"
      },
      {
        "year": "1988",
        "image": "https://i.loli.net/2018/12/02/5c02cfffc651d.jpg",
        "conent": "1988北京天安门城楼对游客正式开放，游客也可以拥有阅兵视角。"
      },
      {
        "year": "1989",
        "image": "https://i.loli.net/2018/12/02/5c02d0017d094.jpg",
        "conent": "1989年希望工程开启，托起数百万失学儿童的未来和希望。"
      },
      {
        "year": "1990",
        "image": "https://i.loli.net/2018/12/02/5c02cffa40d35.jpg",
        "conent": "1990年上证所、深交所成立，股市开始进入中国。"
      },
      {
        "year": "1990",
        "image": "https://i.loli.net/2018/12/02/5c02cfff72b40.jpg",
        "conent": "1990年上海浦东经济开发区建立，默默无名的陆家嘴从此走向闪耀舞台。"
      },
      {
        "year": "1991",
        "image": "https://i.loli.net/2018/12/02/5c02cffeeee0e.jpg",
        "conent": "1991秦山核电站并网发电，标志着我国核电事业开始起飞。"
      },
      {
        "year": "1992",
        "image": "https://i.loli.net/2018/12/02/5c02d0049c4fd.jpg",
        "conent": "1992邓小平南巡讲话，解决了姓资姓社问题，《春天的故事》响遍神州大地。"
      },
      {
        "year": "1993",
        "image": "https://i.loli.net/2018/12/02/5c02d131312fd.jpg",
        "conent": "1993年粮票退出历史舞台，老百姓吃得更饱了，也更好了。"
      },
      {
        "year": "1994",
        "image": "https://i.loli.net/2018/12/02/5c02d12b02715.jpg",
        "conent": "1994年中国接入INTERNET，伟大的互联网时代开始了。"
      },
      {
        "year": "1994",
        "image": "https://i.loli.net/2018/12/02/5c02d12d201e4.jpg",
        "conent": "1994年第一届甲A联赛打响，中国职业足球联赛起步。"
      },
      {
        "year": "1994",
        "image": "https://i.loli.net/2018/12/02/5c02d137604ad.jpg",
        "conent": "1994年住房制度改革，住房公积金出现，商品房时代悄悄到来。"
      },
      {
        "year": "1995",
        "image": "https://i.loli.net/2018/12/02/5c02d12ec6373.jpg",
        "conent": "1995年《大话西游》上映，曾经有一部真挚的电影摆在我们面前。"
      },
      {
        "year": "1995",
        "image": "https://i.loli.net/2018/12/02/5c02d12f5ca08.jpg",
        "conent": "1995年科教兴国战略提出，落实科学技术是第一生产力的思想。"
      },
      {
        "year": "1996",
        "image": "https://i.loli.net/2018/12/02/5c02d139a314c.jpg",
        "conent": "1996年中国钢产量突破一亿吨，跃居世界首位。"
      },
      {
        "year": "1997",
        "image": "https://i.loli.net/2018/12/02/5c02d137182f8.jpg",
        "conent": "1997年香港回归，东方之珠更加闪耀，一国两制伟大构想成为现实。"
      },
      {
        "year": "1998",
        "image": "https://i.loli.net/2018/12/02/5c02d132ad1cf.jpg",
        "conent": "1998年洪水肆虐，中国军民合力谱写了伟大的抗洪精神。"
      },
      {
        "year": "1999",
        "image": "https://i.loli.net/2018/12/02/5c02d1383fbb9.jpg",
        "conent": "1999年澳门回归，漂泊百年的游子回家了。"
      },
      {
        "year": "2000",
        "image": "https://i.loli.net/2018/12/02/5c02d249675ef.jpg",
        "conent": "2000年西气东输工程启动，横贯中国的能源大动脉里，流动的是清洁和热量。"
      },
      {
        "year": "2001",
        "image": "https://i.loli.net/2018/12/02/5c02d2413bf09.jpg",
        "conent": "2001年中国加入世贸组织，全球经济舞台终于迎来了东方力量。"
      },
      {
        "year": "2002",
        "image": "https://i.loli.net/2018/12/02/5c02d2631d789.jpg",
        "conent": "2002年南水北调工程开工，北方人也吃上了长江水。"
      },
      {
        "year": "2002",
        "image": "https://i.loli.net/2018/12/02/5c02d266afd81.jpg",
        "conent": "2002年中国男足闯入世界杯，这是第一次，但不会是最后一次。"
      },
      {
        "year": "2003",
        "image": "https://i.loli.net/2018/12/02/5c02d24e1797b.jpg",
        "conent": "2003年神州五号成功发射，中国人迈出太空漫游第一步，中国载人航天工程取得历史性重大突破。"
      },
      {
        "year": "2004",
        "image": "https://i.loli.net/2018/12/02/5c02d24be83a5.jpg",
        "conent": "2004年刘翔雅典夺金，实现奥运会中国男子田径奖牌零的突破。"
      },
      {
        "year": "2005",
        "image": "https://i.loli.net/2018/12/02/5c02d24ba5124.jpg",
        "conent": "2005年超级女生引爆平民选秀，还记得那个想唱就唱的夏天吗？"
      },
      {
        "year": "2006",
        "image": "https://i.loli.net/2018/12/02/5c02d255bfe77.jpg",
        "conent": "2006年三峡大坝全线建成，高峡出平湖。"
      },
      {
        "year": "2007",
        "image": "https://i.loli.net/2018/12/02/5c02d2428de49.jpg",
        "conent": "2007年嫦娥一号发射成功，国人千年奔月梦圆。"
      },
      {
        "year": "2008",
        "image": "https://i.loli.net/2018/12/02/5c02d249658b0.jpg",
        "conent": "2008年，北京奥运会点燃了全体华人的热情，中华民族精诚团结，使它成为史上最成功的奥运会之一。"
      },
      {
        "year": "2010",
        "image": "https://i.loli.net/2018/12/02/5c02d37926a5a.jpg",
        "conent": "2010年第41届世界博览会在上海举行，这是世博会第一次在发展中国家举办。"
      },
      {
        "year": "2012",
        "image": "https://i.loli.net/2018/12/02/5c02d364921e5.jpg",
        "conent": "2012年蛟龙号创造下潜7062米的中国载人深潜纪录，标志着中国海底载人科学研究和资源勘探能力达到国际领先水平。"
      },
      {
        "year": "2013",
        "image": "https://i.loli.net/2018/12/02/5c02d35fce718.jpg",
        "conent": "2013年“神舟十号”载人飞船与“天宫一号”成功实现自动和手动对接，为我国探月工程开启新征程。"
      },
      {
        "year": "2015",
        "image": "https://i.loli.net/2018/12/02/5c02d36c54408.jpg",
        "conent": "2015年屠呦呦荣获诺贝尔生理学或医学奖，是中国科学家因为在中国本土进行的科学研究而首次获诺贝尔科学奖。"
      },
      {
        "year": "2016",
        "image": "https://i.loli.net/2018/12/02/5c02d3931a873.jpg",
        "conent": "2016年我国成功举办G20杭州峰会，中国又一次惊艳世界。"
      },
      {
        "year": "2016",
        "image": "https://i.loli.net/2018/12/02/5c02d37ca29eb.jpg",
        "conent": "2016年中国“天眼” FAST历时22年终建成，被誉为“世界上最大的望远镜”。"
      },
      {
        "year": "2017",
        "image": "https://i.loli.net/2018/12/02/5c02d385dbefb.jpg",
        "conent": "2017年中国首艘自主建造的航母下水，中国航母，驶向深蓝！"
      },
      {
        "year": "2017",
        "image": "https://i.loli.net/2018/12/02/5c02d380d2f76.jpg",
        "conent": "2017年河北省雄县、容城、安新等3个小县及周边部分区域有了一个响亮的名字——雄安新区。"
      },
      {
        "year": "2018",
        "image": "https://i.loli.net/2018/12/02/5c02d393b5ccd.jpg",
        "conent": "2018年港珠澳大桥正式开通，被誉为桥梁界的“珠穆朗玛峰”。"
      }
    ]
  },

  saveImg: function() {
    if (!this.data.doubleClick){
      this.data.doubleClick = true;
      this.animation1
        .translateX(-width * 0.2)
        .step()
      this.setData({
        animation1: this.animation1.export()
      })

      this.animation2
        .translateX(width * 0.2)
        .step()
      this.setData({
        animation2: this.animation2.export()
      })
    }
    var context = wx.createCanvasContext('canvasImage');
    //画二维码
    context.drawImage(this.data.headSrc, (width * 0.3), (height * 0.92), (height * 0.055 / 2 * 7), (height * 0.055));
    context.draw(true);

    setTimeout(() => {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: width,
        height: height,
        destWidth: width * 2,
        destHeight: height * 2,
        canvasId: 'canvasImage',
        fileType: 'jpg',
        success(res) {
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
        }
      })
    }, 200);
  },
  //重新制作
  back: function() { 
    wx.redirectTo({
      url: "../page3/page3"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.animation1 = wx.createAnimation()
    this.animation2 = wx.createAnimation()
    if(options.share == 'share'){
      wx.redirectTo({
        url: '../page1/page1'
      })
      return;
    }
    wx.showLoading({
      title: 'loading...',
    })
    var avatatSrv = options.avatar;
    this.setData({
      name: options.name,
      date: options.date
    })
    var length = this.data.imgs.length
    for(var i = 0; i < length; i++){
      var item = this.data.imgs[i];
      var year = parseInt(item.year);
      if (parseInt(this.data.date.substring(0, 4)) == 2018){
        this.setData({
          imgSrc: this.data.imgs[length - 1].image,
          text: this.data.imgs[length - 1].conent
        })
        break;
      }
      if(year > parseInt(this.data.date.substring(0,4))){
        //生成随机数
        var index = parseInt(Math.random() * (length - i) + i, 10);
        this.setData({
          imgSrc: this.data.imgs[index].image,
          text: this.data.imgs[index].conent
        })
        break;
      }
    }
    let that = this;
    wx.getImageInfo({
      src: that.data.imgSrc,
      success: function (file) {
        wx.hideLoading();
        that.data.imgSrc = file.path;
        // 使用 wx.createContext 获取绘图上下文 context
        var context = wx.createCanvasContext('canvasImage');
        context.fillStyle = "#fff";
        context.fillRect(0, 0, width, height);
        //画背景图
        context.drawImage(that.data.imgSrc, 0, 0, width, (height * 0.35));
        //画头像
        context.save()
        context.beginPath()
        var long = height * 0.18;
        context.arc((width * 0.5), (height * 0.35), (long * 0.5), 0, 2 * Math.PI)
        //剪裁成圆形
        context.clip()
        context.drawImage(avatatSrv, (width * 0.5 - long * 0.5), (height * 0.35 - long * 0.5), long, long);
        context.restore()
        context.draw()
        //画荣誉证书4个字
        context.drawImage(that.data.textSrc, (width * 0.1), (height * 0.47), (width * 0.8), height * 0.12);
        context.setFontSize(16)
        //画图片描述，字符换行处理
        var chr = that.data.text.split(""); //这个方法是将一个字符串分割成字符串数组
        var temp = "";
        var row = [];
        context.setFillStyle("#000")
        for (var a = 0; a < chr.length; a++) {
          if (context.measureText(temp).width < (width * 0.78)) {
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
          context.fillText(row[b], width * 0.1, height * 0.65 + b * 20);
        }
        var text = "感谢 " + that.data.name + " 的见证！";
        var textWidth = context.measureText(text).width;
        context.fillText(text, (width - textWidth) / 2, height * 0.82);
        // //画红章
        context.drawImage(that.data.tagSrc, (width * 0.5), (height * 0.7), (height * 0.2), height * 0.2);
        //画小程序二维码
        //context.drawImage(that.data.headSrc, (width * 0.1), (height * 0.88), (height * 0.1), (height * 0.1));
        //context.drawImage(that.data.headSrc, (width * 0.4), (height * 0.88), (height * 0.1), (height * 0.1));
        //context.drawImage(that.data.headSrc, (width * 0.7), (height * 0.88), (height * 0.1), (height * 0.1));
        //长二维码
        //context.drawImage(that.data.headSrc, (width * 0.08), (height * 0.9), (height * 0.07 / 2 * 7), (height * 0.07));
        //context.drawImage(that.data.headSrc, (width * 0.45), (height * 0.9), (height * 0.07 / 2 * 7), (height * 0.07));
        context.draw(true)
      }
    })
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '时代见证者荣誉证书',
      path: 'pages/page4/page4?share=share'
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    wx.redirectTo({
      url: '../page2/page2'
    })
  }

})