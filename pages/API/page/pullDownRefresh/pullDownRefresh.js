var data = {
  page: {
    title: 'pullDownRefresh',
    desc: '下拉刷新。'
  },
  info: '下滑页面即可刷新'
}

Page({
    data,
    onPullDownRefresh: function(){
        this.setData({
            info: '正在下拉刷新'
        })
    },
    stopPullDownRefresh: function(){
        
        this.setData({
            info: '取消下拉刷新'
        })
        wx.stopPullDownRefresh()
    }
});