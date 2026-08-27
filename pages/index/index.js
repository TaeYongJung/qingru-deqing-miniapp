Page({
  goList(e){
    const type = e.currentTarget.dataset.type || ''
    wx.navigateTo({
      url:'/pages/list/list?type=' + type
    })
  }
})