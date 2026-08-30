const cards = require('../../data/cards')

Page({
  data: {
    item: {},
    isContact: false
  },

  onLoad(options) {
    const item = cards.find(i => i.id == options.id) || {}
    this.setData({
      item,
      isContact: item.type === '咨询单位'
    })
  },

  callPhone() {
    const phone = this.data.item.phone || ''
    if (/^\d[\d-]*$/.test(phone)) {
      wx.makePhoneCall({
        phoneNumber: phone.replace(/-/g, '')
      })
    } else {
      wx.showToast({
        title: '请通过德清县人民政府官网查询',
        icon: 'none'
      })
    }
  }
})