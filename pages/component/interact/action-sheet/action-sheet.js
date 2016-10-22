var data = {
  page: {
    title: 'action-sheet',
    desc: '从屏幕底部出现的菜单表。'
  },
  actionSheetHidden: true,
  actionSheetItems: ['item1', 'item2', 'item3', 'item4']
}

Page({
    data,
    actionSheetTap: function(e){
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    },
    actionSheetChange: function(e){
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    },
    bindItemTap:function(e){
        console.log('tap ' + e.currentTarget.dataset.name)
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    }
});