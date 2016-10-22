var data = {
  page: {
    title: 'slider',
    desc: '滑动选择器。'
  }
}

var pageObject = {data: data};

for(var i = 1; i < 5; i++){
  (function(index){
    pageObject['slider' + index + 'change'] = function(e){
      console.log('slider' + index + '发生 change 事件，携带值为：', e.detail.value)
    }
  })(i)
}

Page(pageObject);