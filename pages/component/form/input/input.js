var data = {
  page: {
    title: 'input',
    desc: '输入框。'
  },
  focus:false,
  inputValue:''
}

Page({
    data,
    bindButtonTap: function(){
        this.setData({
            focus: Date.now()
        })
    },
    bindKeyInput: function(e){
        this.setData({
            inputValue: e.detail.value
        })
    },
    bindReplaceInput: function(e){
        var value = e.detail.value;
        var pos = e.detail.cursor;
        if(pos != -1){
            //光标在中间
            var left = e.detail.value.slice(0, pos);
            //计算光标的位置
            pos = left.replace(/11/g,'2').length
        }

        return {
            value: value.replace(/11/g, '2'),
            cursor:pos
        }
    },
    bindHideKeyboard: function(e){
        if(e.detail.value === '123'){
            wx.hideKeyboard();
        }
    }
});