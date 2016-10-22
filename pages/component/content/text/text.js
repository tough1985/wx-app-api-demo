var initData = 'this is first line\nthis is second line';
var extraLine = [];

var data = {
  page: {
    title: 'text',
    desc: '文本。'
  },
  text: initData
}

Page({
    data,
    add: function(e){
        extraLine.push('other line');
        this.setData({
            text: initData + '\n' + extraLine.join('\n')
        })
    },
    remove: function(e){
        if(extraLine.length > 0){
            extraLine.pop();
            this.setData({
                text: initData + '\n' + extraLine.join('\n')
            })
        }
    }
});