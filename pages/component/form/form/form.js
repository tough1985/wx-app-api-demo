var data = {
  page: {
    title: 'form',
    desc: '表单。'
  }
}

Page({
    data,
    formSubmit: function(e){
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function(e){
        console.log('form发生了reset事件')
    }
});