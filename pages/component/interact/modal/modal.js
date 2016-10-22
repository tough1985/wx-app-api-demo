var data = {
  page: {
    title: 'modal',
    desc: '模态弹窗。'
  },
  modalHidden: true,
  modalHidden2: true
}

Page({
    data,
    modalTap: function(e){
        this.setData({
            modalHidden: false
        })
    },
    modalChange: function(e) {
        this.setData({
            modalHidden: true
        })
    },
    modalTap2: function(e){
        this.setData({
            modalHidden2: false
        })
    },
    modalChange2: function(e) {
        this.setData({
            modalHidden2: true
        })
    }
});