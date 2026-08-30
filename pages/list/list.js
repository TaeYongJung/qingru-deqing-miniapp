const allCards = require('../../data/cards')

Page({
  data: {
    cards: [],
    keyword: '',
    currentType: '',
    pageTitle: '我能来做什么'
  },

  onLoad(options) {
    const type = options.type || ''
    const titleMap = {
      '项目机会': '我能来做什么',
      '实践站点': '德清能提供什么',
      '咨询单位': '我该找谁'
    }
    const pageTitle = titleMap[type] || '我能来做什么'
    const cards = type ? allCards.filter(item => item.type.includes(type) || item.category === type) : allCards
    this.setData({ cards, currentType: type, pageTitle })
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