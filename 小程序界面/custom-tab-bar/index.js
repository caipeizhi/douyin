Component({
  data: {
    selected: 0,
    color: "#8b8b8b",
    selectedColor: "#ffffff",
    list: [{
      pagePath: "/pages/index/index",
      text: "首页"
    }, {
      pagePath: "/pages/friend/friend",
      text: "朋友"
    },{
      pagePath: "/pages/pub/pub",
      text: "+",
      isIcon:true
    },{
      pagePath: "/pages/msg/msg",
      text: "消息"
    }
    ,{
      pagePath: "/pages/mine/mine",
      text: "我的"
    }
  
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})