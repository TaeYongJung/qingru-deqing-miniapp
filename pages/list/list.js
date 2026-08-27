const cards = require('../../data/cards')

Page({
  data: {
    cards,
    keyword: ''
  },
  search(e) {
    const keyword = e.detail.value
    this.setData({
      keyword,
      cards: cards.filter(item => item.title.includes(keyword) || item.type.includes(keyword))
    })
  },
  openDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id
    })
  }
})
