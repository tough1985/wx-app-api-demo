var data = {
  page: {
    title: 'animation',
    desc: '动画。'
  }
}

Page({
    data,
    onReady: function(){
        this.animation = wx.createAnimation()
    },
    rotateAndScale: function(){
        this.animation.rotate(Math.random() * 360)
                      .scale(Math.random() * 2)
                      .step();
        this.setData({
            animation: this.animation.export()
        })
    },
    rotateThenScale: function(){
        this.animation.rotate(Math.random() * 360).step();
        this.animation.scale(Math.random() * 2).step();
        this.setData({
            animation: this.animation.export()
        })
    },
    rotateAndScaleThenTranslate: function(){
        this.animation.rotate(Math.random() * 360)
                      .scale(Math.random() * 2)
                      .step();
        this.animation.translate(Math.random() * 100, Math.random() * 100).step();
        this.setData({
            animation: this.animation.export()
        })
    },
    reset: function(){
        this.animation.rotate(0)
                      .scale(1)
                      .translate(0,0)
                      .step();
        this.setData({
            animation: this.animation.export()
        })   
    }
});
