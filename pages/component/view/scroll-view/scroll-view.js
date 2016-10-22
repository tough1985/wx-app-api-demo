var order = ['green', 'red', 'yellow', 'blue', 'green'];
var data = {
  page: {
    title: 'scroll-view',
    desc: '滚动视图'
  },
  toView: "green"
}
Page({
    data,
    upper: function(e){
        console.log(e);
    },
    lower: function(e){
        console.log(e);
    },
    scroll: function(e){
        this.setData({
            scrollTop: e.detail.scrollTop
        })
    },
    scrollToTop: function(e){
        this.setData({
            scrollTop: 0
        })
    },
    tap: function(e){
        for(var i = 0; i < order.length; ++i){
            if(order[i] === this.data.toView){
                this.setData({
                    toView: order[i + 1],
                    scrollTop: (i + 1) * 200
                })
                break;
            }
        }
    },
    tapMove: function(e){
        this.setData({
            scrollTop:this.data.scrollTop + 10
        })
    }
})