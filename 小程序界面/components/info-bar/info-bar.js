// components/info-bar/info-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       vid:{
         type:String,
         value:null
       },
       head:{
         type:String,
         value:"/images/default.png"
       },
       dianzan:{
         type:String,
         value:1
       },
       pinglun:{
        type:String,
        value:1
      },
       shoucang:{
        type:String,
        value:1
      },
       zhuanfa:{
        type:String,
        value:1
      }
      ,
       userNick:{
        type:String,
        value:""
      }
      ,
       content:{
        type:String,
        value:""
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
           xx_status:1,
           sc_status:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDianZan: function(e){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项  
      
      if(this.data.xx_status==1){
         this.setData({xx_status:2,dianzan:parseInt(this.data.dianzan)+1}) 
         myEventDetail.msg="add";
      }else{
        this.setData({xx_status:1,dianzan:parseInt(this.data.dianzan)-1});
        myEventDetail.msg="remove";
      } 
      myEventDetail.data=e.currentTarget.dataset.vid;
      this.triggerEvent('dianzan', myEventDetail, myEventOption)
    },
    onPingLun: function(e){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项   
      this.triggerEvent('pinglun', myEventDetail, myEventOption)
    },
    onShouCang: function(e){
      var myEventDetail ={} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项 
      if(this.data.sc_status==1){
        this.setData({sc_status:2,shoucang:parseInt(this.data.shoucang)+1}) 
        myEventDetail.msg="add";
     }else{
       this.setData({sc_status:1,shoucang:parseInt(this.data.shoucang)-1});
       myEventDetail.msg="remove";
     }
     myEventDetail.data=e.currentTarget.dataset.vid;
      this.triggerEvent('shoucang', myEventDetail, myEventOption)
    },
    onZhuanFa: function(e){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项 
      this.triggerEvent('zhuanfa', myEventDetail, myEventOption)
    },
  }
})
