var data = {
  page: {
    title: 'navigator',
    desc: '导航。'
  }
}

Page({
    data,
    navigateTo: function(e){
      wx.navigateTo({
        url: '../navigate/navigate?title=导航',
        success: function(){
          console('navigation success');
        }
      })
    },
    redirectTo: function(e){
      wx.redirectTo({
        url: '../redirect/redirect',
        success: function(){
          console('redirect success');
        }
      })
    },
    navigateBack: function(e){
      wx.navigateBack()
    }
});