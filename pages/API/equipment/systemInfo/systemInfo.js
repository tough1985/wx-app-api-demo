var keys = [
  'model', 'pixelRatio', 'windowWidth', 'windowHeight', 'language', 'version'
]
var names = [
  '手机型号', '设备像素比', '窗口宽度', '窗口高度', '微信设置的语言', '微信版本号'
]
var initSystemInfo = function(){
    var systemInfo = [];

    for(var i = 0; i < keys.length; i++){
      systemInfo.push({
        name: names[i],
        value: ''
      });
    }
    return systemInfo;
}
var data = {
  page: {
    title: 'systemInfo',
    desc: '系统信息。'
  },
  systemInfo: initSystemInfo()
}

Page({
    data,
    getSystemInfo: function(){
      var that = this;
      wx.getSystemInfo({
        success: function(res){
          var systemInfo = [];

          for(var i = 0; i < keys.length; i++){
            systemInfo.push({
              name: names[i],
              value: res[keys[i]]
            });
          }

          that.setData({
            systemInfo: systemInfo
          })
        }
      })
    }
});