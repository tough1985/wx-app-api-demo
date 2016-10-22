var typeNames = [
    'view', 'content', 'form', 'interact', 'nav', 'media'
];

var titles = [
    '内容分区', '内容', '表单', '操作反馈', '导航', '媒体组件'
];

var widgetItems = [
    ['view', 'scroll-view', 'swiper'],
    ['text', 'icon', 'progress'],
    ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch'],
    ['action-sheet', 'modal', 'toast', 'loading'],
    ['navigator'],
    ['image', 'audio', 'video']
]

var initWidgetTypes = function(){
    var widgetTypes = [];
    for(var i = 0, len = typeNames.length; i < len; i++){
        widgetTypes.push(
            {
                "widgetTypeTitle": titles[i],
                "widgetTypeName": typeNames[i],
                "viewShow": false,
                "widgetItems": widgetItems[i]
            }
        )
    }
    return widgetTypes;
}

var data = {
    page: {
        title: 'API Demo',
        desc: 'API接口能力演示'
    },
    widgetTypes: initWidgetTypes()
};

var widgetsToggle = function (e) {
    
    var id = e.currentTarget.id,
        widgetTypes = this.data.widgetTypes;

    for(var i = 0, len = widgetTypes.length; i < len; i++){
        
        if(widgetTypes[i].widgetTypeName === id){
            widgetTypes[i].viewShow = !widgetTypes[i].viewShow;
        } else {
            widgetTypes[i].viewShow = false;
        }
    }
    
    this.setData({"widgetTypes":widgetTypes});
}

Page({data, widgetsToggle});