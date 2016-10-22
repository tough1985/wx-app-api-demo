var data = {
  page: {
    title: 'networkType',
    desc: '网络状态。'
  },
  networkType:"未获取"
}

Page({
    data,
    getNetworkType: function(e){
      var that = this;
      wx.getNetworkType({
        success: function(res){
          that.setData({
            networkType: res.networkType
          })
        }
      })
    }
});