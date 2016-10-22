

var data = {
  page: {
    title: 'image',
    desc: '图片。'
  },
  imageList: []
}

Page({
    data,
    chooseImage: function(e) {
        var that = this;
        wx.chooseImage({
            success: function(res){
                console.log(res);
                that.setData({
                    imageList: res.tempFilePaths
                })
            }
        })
    },
    previewImage: function(e) {
        // 不理解这预览是干啥的
        var current = e.target.dataset.src;
        console.log('current=' + current);
        wx.previewImage({
            current: current,
            urls: this.data.imageList
        })
    }
});