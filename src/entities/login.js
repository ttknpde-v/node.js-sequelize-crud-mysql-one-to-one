const config = require('../config/config-database')
const configSequel = config.sequelizeConfig
const { DataTypes } = config.sequelize
/* build entity by sequelize */
const Login = configSequel.define(
    'login' , {
        email : {
            type: DataTypes.STRING
        } ,
        password : {
            type : DataTypes.STRING,
        },
        eid : {
            type : DataTypes.INTEGER ,
            references : { //  setting foreign key
                model : 'employee',
                key : 'eid'
            }}
    } ,
    {
        // freeze name table not using *s on name
        freezeTableName: true ,
        // don't use createdAt/update
        timestamps: false
    }
)

module.exports = Login