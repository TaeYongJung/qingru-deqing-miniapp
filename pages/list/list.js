const allCards = require('../../data/cards')

Page({
  data: {
    cards: [],
    keyword: '',
    currentType: ''
  },

  onLoad(options) {
    const type = options.type || ''
    const cards = type ? allCards.filter(item => item.type.includes(type) || item.category === type) : allCards
    this.setData({ cards, currentType:type })
  },

  search(e) {
    const keyword = e.detail.value
    const cards = allCards.filter(item =>
      item.name.includes(keyword) ||
      item.type.includes(keyword) ||
      item.location.includes(keyword)
    )
    this.setData({ keyword, cards })
  },

  openDetail(e) {
    wx.navigateTo({
      url:'/pages/detail/detail?id=' + e.currentTarget.dataset.id
    })
  }
})