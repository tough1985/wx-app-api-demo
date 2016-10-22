var typeNames = [
    'network', 'media', 'storage', 'location', 'equipment', 'page', 'open'
];

var titles = [
    '网络', '媒体', '数据', '位置', '设备', '界面', '开放接口'
];

var widgetItems = [
    [],
    ['image', 'record'],
    ['storage'],
    ['location'],
    ['networkType', 'systemInfo', 'accelerometerChange', 'compassChange'],
    ['navigationBar', 'navigator', 'animation', 'canvas', 'pullDownRefresh'],
    ['login', 'userinfo']
    
]

var widgetItemNames = [
    [],
    ['图片', '录音'],
    ['数据'],
    ['获取/查看位置'],
    ['网络状态', '系统信息', '重力感应', '罗盘'],
    ['设置导航条', '页面跳转', '创建动画', '创建绘画', '下拉刷新'],
    ['登录', '用户信息']
]

var initWidgetTypes = function(){
    var widgetTypes = [];
    for(var i = 0, len = typeNames.length; i < len; i++){
        widgetTypes.push(
            {
                "widgetTypeTitle": titles[i],
                "widgetTypeName": typeNames[i],
                "viewShow": false,
                "widgetItems": widgetItems[i],
                "widgetItemNames": widgetItemNames[i] 
            }
        )
    }
    return widgetTypes;
}

var data = {
    page: {
        title: 'API Demo',
        desc: '小程序API部分的演示。'
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