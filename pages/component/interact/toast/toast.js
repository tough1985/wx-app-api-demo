var toastNum = 2;
var data = {
  page: {
    title: 'toast',
    desc: '消息提示框。'
  }
}

var pageObject = {
    data: data
};

for(var i = 0; i <= toastNum; ++i){
    pageObject.data['toast' + i + 'Hidden'] = true;
    (function(index){
        pageObject['toast' + index + 'Change'] = function(e){
            var obj = {};
            obj['toast' + index + 'Hidden'] = true;
            this.setData(obj);
        }
        pageObject['toast' + index + 'Tap'] = function(e){
            var obj = {};
            obj['toast'+index+'Hidden'] = false;
            this.setData(obj);
        }
    })(i)
}

Page(pageObject);