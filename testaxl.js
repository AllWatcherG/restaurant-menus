const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

let wow = async function(){
    await sequelize.sync({force:true})
    dummyMenu = await Menu.bulkCreate(seedMenu)
    console.log(await Menu.findMenu('Breakfast'))
}

wow()