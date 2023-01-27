 //获取应用实例
 const app = getApp()
 Page({
   data: {
     videoList: []
   },
   onLoad() {
//拉去后台数据
    var that = this;
    wx.request({
      url: 'http://192.168.1.2:8888/video/page',
      success(res){
        console.log(res.data);
        that.setData({videoList:res.data});
      }
    })

   },
   dianzhan(e) {
     console.log("点赞");
   },
   pinglun(e) {
     console.log("评论")
   },
   shoucang(e) {
     console.log("收藏")
   },
   zhuanfa(e) {
     console.log("转发")
   }
 })