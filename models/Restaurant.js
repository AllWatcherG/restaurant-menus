const {sequelize} = require('../db');
const { Sequelize, Model } = require('sequelize');

// TODO - create a Restaurant model
// const { DataTypes } = require('sequelize');

// const Restaurant = sequelize.define('Restaurant', {
//     name: DataTypes.STRING,
//     location: DataTypes.STRING,
//     cuisine: DataTypes.STRING
// })

class Restaurant extends Model{
    static async findRestaurant(columnValue){
        return await (this.findAll({
            where: {
                "name": columnValue
            },
            raw:true
        })
        )
    }
    static async deleteRestaurant(columnValue){
        await (this.destroy({
            where: {
                "name": columnValue
            }
        }))
        console.log('Row has been deleted')
    }
}

Restaurant.init({name: Sequelize.STRING, location: Sequelize.STRING, cuisine: Sequelize.STRING },{sequelize})

module.exports = {Restaurant};