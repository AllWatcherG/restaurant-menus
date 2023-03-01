const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeEach(async () => {
        //berfoeEach() recreates after each test

        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        testRestaurant = await Restaurant.bulkCreate(seedRestaurant)
        result = await Restaurant.findAll({
            raw: true
        })
        // const testRestaurant = await Restaurant.create({ name: "Burger King", location: "West New York", cuisine: "Fast Food" });
        expect(result.length).toBe(seedRestaurant.length)
        for(let i = 0; i < result.length; i++){
            foundObj = result[i]
            knownObj = seedRestaurant[i]
            expect(foundObj.name).toBe(knownObj.name)
            expect(foundObj.location).toBe(knownObj.location)
            expect(foundObj.cuisine).toBe(knownObj.cuisine)
        }
    });

    test('can create a Menu', async () => {
        // TODO - write test
        // const testMenu = await Menu.create({title: "Breakfast"});
        testRestaurant = await Menu.bulkCreate(seedMenu)
        result = await Menu.findAll({
            raw: true
        })
        // const testRestaurant = await Restaurant.create({ name: "Burger King", location: "West New York", cuisine: "Fast Food" });
        expect(result.length).toBe(seedMenu.length)
        for(let i = 0; i < result.length; i++){
            foundObj = result[i]
            knownObj = seedMenu[i]
            expect(foundObj.title).toBe(knownObj.title)
        }
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        
        testRestaurant = await Restaurant.bulkCreate(seedRestaurant)
        result = await Restaurant.findRestaurant("AppleBees")
        expect(result.length).toBe(1)

        
    });

    test('can find Menus', async () => {
        // TODO - write test
        testMenu = await Menu.bulkCreate(seedMenu)
        result = await Menu.findMenu("Breakfast")
        expect(result.length).toBe(1);

    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        testRestaurant = await Restaurant.bulkCreate(seedRestaurant)
        await Restaurant.deleteRestaurant("AppleBees")
        result = await Restaurant.findAll({raw:true})
        expect(result.length).toBe(2)
    });
})