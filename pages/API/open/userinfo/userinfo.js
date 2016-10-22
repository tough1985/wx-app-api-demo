var data = {
  page: {
    title: 'userinfo',
    desc: '用户信息。'
  }
}

Page({
    data,
    getUserInfo: function(){
      var that = this;
      wx.getUserInfo({
        success: function(res){
          that.setData({
            userInfo:res.userInfo 
          })
        }
      })
    },
    clear: function(){
      this.setData({
        userInfo: {}
      })
    }
});