const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} =require('./Item')

Menu.belongsTo(Restaurant)

Restaurant.hasMany(Menu)

Menu.belongsToMany(Item  , { through: 'ItemMenu'})
Item.belongsToMany(Menu, { through: 'ItemMenu'})

module.exports = { Restaurant, Menu, Item }
