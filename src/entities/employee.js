const config = require('../config/config-database')
const configSequel = config.sequelizeConfig
const { DataTypes } = config.sequelize
/* build entity by sequelize */
const Employee = configSequel.define(
    'employee' , {
        eid : {
            type : DataTypes.INTEGER ,
            primaryKey : true,
            autoIncrement: true
        },
        fullname : {
            type: DataTypes.STRING
        } ,
        age : {
            type : DataTypes.INTEGER,
        }
    } ,
    {
        // freeze name table not using *s on name
        freezeTableName: true ,
        // don't use createdAt/update
        timestamps: false
    }
)

module.exports = Employee