const cards = require('../../data/cards')
Page({
 data:{item:{}},
 onLoad(options){
  const item=cards.find(i=>i.id==options.id)
  this.setData({item:item||{}})
 }
})
