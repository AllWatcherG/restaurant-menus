const {sequelize} = require('../db');
const { Sequelize, Model } = require('sequelize');

// TODO - create a Menu model
const { DataTypes } = require('sequelize')

// const Menu = sequelize.define('Menu', {
//     title: DataTypes.STRING
// })

class Menu extends Model{
    static async findMenu(columnValue){
        return await (this.findAll({
            where: {
                "title": columnValue
            },
            raw:true
        })
        )
    }
}

Menu.init({title: Sequelize.STRING},{sequelize})

module.exports = {Menu};