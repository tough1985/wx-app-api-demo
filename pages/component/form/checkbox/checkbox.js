var items = [
    {name: 'USA', value: '美国'},
    {name: 'CHN', value: '中国', checked: 'true'},
    {name: 'BRA', value: '巴西'},
    {name: 'JPN', value: '日本'},
    {name: 'ENG', value: '英国'},
    {name: 'TUR', value: '法国'}
]

var data = {
  page: {
    title: 'checkbox-group',
    desc: '多项选择器，内部由多个checkbox组成。'
  },
  items: items
}

Page({
    data,
    checkboxChange: function(e){
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    }
});