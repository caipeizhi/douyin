// app.js
App({
  onLaunch: function (options) {
    const that = this;
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏高度 + 44
    that.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
    that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    that.globalData.menuTop = menuButtonInfo.top;
    that.globalData.menuHeight = menuButtonInfo.height;
    that.globalData.menuWidth =  systemInfo.screenWidth - menuButtonInfo.width-14;
    that.globalData.abc = systemInfo.screenHeight-48;
    that.globalData.statusBarHeight=systemInfo.statusBarHeight;
  },
  // 数据都是根据当前机型进行计算，这样的方式兼容大部分机器
  globalData: {
    navBarHeight: 0, // 导航栏高度
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuTop: 0, // 胶囊距底部间距（保持底部间距一致）
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    menuWidth : 0,
    abc:0,
    statusBarHeight:0
  }
})