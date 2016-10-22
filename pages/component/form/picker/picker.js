var data = {
  page: {
    title: 'picker',
    desc: '滚动选择器，现支持三种选择器，通过mode来区分，分别是普通选择器，时间选择器，日期选择器，默认是普通选择器。'
  },
  array:['美国','中国','巴西','日本'],
  index: 0,
  date: '2016-09-01',
  time: '12:01'
}

Page({
    data,
    bindPickerChange: function(e){
      console.log('picker发送选择改变，携带值为：', e.detail.value);
      this.setData({
        index: e.detail.value
      })
    },
    bindDateChange: function(e){
      this.setData({
        date: e.detail.value
      })
    },
    bindTimeChange: function(e){
      this.setData({
        time: e.detail.value
      })
    }
});