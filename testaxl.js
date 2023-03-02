const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

let wow = async function(){
    await sequelize.sync({force:true})
    
      const testRestaurant = await Restaurant.bulkCreate(seedRestaurant)
      const testMenu = await Menu.bulkCreate(seedMenu)
      const testApple = await Restaurant.findOne({
          where: {
              name: 'AppleBees'
          }
      })

      const testBreakfast = await Menu.findAll()

      await testApple.addMenus(testBreakfast)

      testAssociation = await testApple.getMenus({raw:true})
      // testAssociation = testAssociation[0]
      console.log(testAssociation)
      
      


}

// wow()

