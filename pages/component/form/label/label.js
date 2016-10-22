var checkboxItems = [
    {name: 'USA', value: '美国'},
    {name: 'CHN', value: '中国', checked: 'true'},
    {name: 'BRA', value: '巴西'},
    {name: 'JPN', value: '日本', checked: 'true'},
    {name: 'ENG', value: '英国'},
    {name: 'TUR', value: '法国'}
]

var radioItems = [
    {name: 'USA', value: '美国'},
    {name: 'CHN', value: '中国', checked: 'true'},
    {name: 'BRA', value: '巴西'},
    {name: 'JPN', value: '日本'},
    {name: 'ENG', value: '英国'},
    {name: 'TUR', value: '法国'}
]


var data = {
  page: {
    title: 'label',
    desc: '用来改进表单组件的可用性，使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。\nfor优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。'
  },
  checkboxItems: checkboxItems,
  radioItems: radioItems,
  hidden: false
}

Page({
    data,
    checkboxChange: function(e){
      var checked = e.detail.value;
      var changed = {};
      for(var i = 0; i < this.data.checkboxItems.length; i++){
        if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
          changed['checkboxItems[' + i + '].checked'] = true;
        } else {
          changed['checkboxItems[' + i + '].checked'] = false;
        }
      }
      this.setData(changed);
    },
    radioChange: function(e){
      var checked = e.detail.value;
      var changed = {};
      for(var i = 0; i < this.data.radioItems.length; i++){
        if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
          changed['radioItems[' + i + '].checked'] = true;
        } else {
          changed['radioItems[' + i + '].checked'] = false;
        }
      }
      this.setData(changed);
    },
    tabEvent: function(e){
      console.log("button clicked", e);
    }
});