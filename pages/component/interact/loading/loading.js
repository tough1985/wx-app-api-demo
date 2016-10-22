var data = {
  page: {
    title: 'loading',
    desc: '加载提示。'
  },
  hidden: true
}

Page({
    data,
    loadingChange: function(e){
        console.log('loadingChange')
        this.setData({
            hidden: true
        })
    },
    loadingTap: function(e) {
        this.setData({
            hidden: false
        })

        var that = this;
        setTimeout(function(){
            that.setData({
                hidden: true
            })
        }, 1500)
    }
});