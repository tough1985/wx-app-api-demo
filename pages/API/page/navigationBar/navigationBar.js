var data = {
  page: {
    title: 'navigationBar',
    desc: '设置导航条。'
  }
}

Page({
    data,
    setNavigatorTitle: function(e){
        var title = e.detail.value.title;
        wx.setNavigationBarTitle({
            title: title
        })
    },
    loading: function(){
        wx.showNavigationBarLoading();
    },
    clear: function(){
        wx.hideNavigationBarLoading();
    }
});