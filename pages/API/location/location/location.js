var data = {
  page: {
    title: 'getLocation',
    desc: '获取位置。'
  },
  hasLocation: false
}

Page({
    data,
    getLocation: function(){
      var that = this;
      wx.getLocation({
        success: function(res){
          console.log(res);
          //纬度
          var latitude = res.latitude.toFixed(2);
          //经度
          var longitude = res.longitude.toFixed(2);
          that.setData({
            latitudeFloat: res.latitude,
            longitudeFloat: res.longitude,
            latitude: latitude.toString().split('.'),
            longitude: longitude.toString().split('.'),
            hasLocation: true
          })
        }
      })
    },
    openLocation: function(e){
      wx.openLocation({
        latitude: this.data.latitudeFloat,
        longitude: this.data.longitudeFloat
      })
    },
    clear: function(){
      this.setData({
          latitude: [],
          longitude: [],
          hasLocation: false
        })
    }
});