var data = {
  page: {
    title: 'switch',
    desc: '开关选择器。'
  }
}

Page({
    data,
    switch1Change: function(e){
      console.log('switch1 发生 change 事件，携带值为：', e.detail.value)
    },
    switch2Change: function(e){
      console.log('switch2 发生 change 事件，携带值为：', e.detail.value)
    },
});