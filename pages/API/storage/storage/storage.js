var data = {
  page: {
    title: 'storage',
    desc: '数据。'
  },
  toast: {
      hidden: true,
      content: ''
  },
}

Page({
    data,
    submitForm: function(e){
        console.log(e);
        var type = e.detail.target.id;
        var key = e.detail.value.key;
        var data = e.detail.value.data;

        if (type === 'get') {
            var value = wx.getStorageSync(key);
            console.log(value)
            this.setData({
                key: key,
                inputData: value,
                'toast.hidden': false,
                'toast.content': '读取数据成功'
            })
        } else if(type === 'set'){
            wx.setStorageSync(key, data);
            this.setData({
                key: key,
                inputData: data,
                'toast.hidden': false,
                'toast.content': '存储数据成功'
            })
        } else if(type === 'clear'){
            wx.clearStorageSync();
            this.setData({
                key: '',
                inputData: '',
                'toast.hidden': false,
                'toast.content': '清除数据成功'
            })
        }
    },
    toastChange: function(){
        this.setData({
            'toast.hidden': true
        })
    }
});