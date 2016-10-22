var data = {
  page: {
    title: 'login',
    desc: '登录。'
  },
  info: '点击登录获取code'
}

Page({
    data,
    login: function(){
        var that = this;
        wx.login({
            success: function(res){
                that.setData({
                    info: res.code
                })
            }
        })
    }
});