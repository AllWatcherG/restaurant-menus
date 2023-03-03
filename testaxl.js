const {sequelize} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
    seedItem,
  } = require('./seedData');

let wow = async function(){
    await sequelize.sync({force:true})
    
    await Menu.bulkCreate(seedMenu)
        await Item.bulkCreate(seedItem)
        let testMenu = await Menu.findAll()
        let testItem = await Item.findAll()
        for(let i = 0; i < testMenu.length; i++){
            await testMenu[i].addItems(testItem)
        }
        for(let i = 0; i < testItem.length; i++){
            await testItem[i].addMenus(testMenu)
        }
        const verifyMenu= await Menu.findByPk(1, {include:Item})
        test = verifyMenu
        console.log(test.Items.length)
    // await testItem.addMenus(testMenu)
    // const verifyMenu= await Menu.findByPk(1, {include:Item})
    // test = verifyMenu.item.length
    // expect(test).toBe(3)
    
      


}

// wow()

