const allCards = require('../../data/cards')

Page({
  data: {
    cards: [],
    keyword: '',
    currentType: '',
    pageTitle: '我能来做什么',
    isContact: false
  },

  onLoad(options) {
    const type = options.type || ''
    const titleMap = {
      '项目机会': '我能来做什么',
      '实践站点': '德清能提供什么',
      '咨询单位': '我该找谁'
    }
    const pageTitle = titleMap[type] || '我能来做什么'
    const cards = this.filterCards(type, '')
    this.setData({
      cards,
      currentType: type,
      pageTitle,
      isContact: type === '咨询单位'
    })
  },

  filterCards(type, keyword) {
    let cards = type
      ? allCards.filter(item => {
          if (type === '项目机会') return item.category === '项目机会'
          return item.type.includes(type) || item.category === type
        })
      : allCards

    if (keyword) {
      cards = cards.filter(item =>
        (item.title || '').includes(keyword) ||
        (item.type || '').includes(keyword) ||
        (item.location || '').includes(keyword) ||
        (item.desc || '').includes(keyword) ||
        (item.target || '').includes(keyword) ||
        (item.benefit || '').includes(keyword)
      )
    }
    return cards
  },

  search(e) {
    const keyword = e.detail.value.trim()
    const cards = this.filterCards(this.data.currentType, keyword)
    this.setData({ keyword, cards })
  },

  openDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id
    })
  },

  callPhone(e) {
    const phone = e.currentTarget.dataset.phone || ''
    if (/^\d[\d-]*$/.test(phone)) {
      wx.makePhoneCall({ phoneNumber: phone.replace(/-/g, '') })
    } else {
      wx.showToast({
        title: '请通过德清县人民政府官网查询',
        icon: 'none'
      })
    }
  }
})