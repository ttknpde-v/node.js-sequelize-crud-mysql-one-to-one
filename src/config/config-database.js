const dotenv = require('dotenv')
const path = require('../service/service-server').path
const log = require('../log/logging').log
dotenv.config({ path : path.resolve('../env/.env') })

module.exports = config = {} /* declare empty object  */
class ConfigDatabase {
    constructor() {
        log.silly('ConfigDatabase constructor was using')
    }
    get sequelize () {
        return require('sequelize')
    }
    get sequelizeConfig() {
        return new this.sequelize(
            process.env.SQLX_DATABASE,
            process.env.SQLX_USERNAME,
            process.env.SQLX_PASSWORD,
            {
               /* set different port */
               dialect : 'mysql' ,
               host: process.env.SQLX_HOST,
               port: process.env.SQLX_PORT,
               pool : {
                       max: 5,
                       min: 0,
                       acquire: 30000,
                       idle: 10000
                      }
            }
        ) // ended new sequelize()
    }
}

/* check config , it was done or not
new ConfigDatabase().sequelizeConfig.authenticate().then(() => {
    log.info('connected successfully!!')
}).catch((error) => {
    log.warn('message : failed connect!!')
    throw error
})*/

const configSequel = new ConfigDatabase() /* create object class */

config.sequelizeConfig = configSequel.sequelizeConfig // add object
config.sequelize = configSequel.sequelize // add object

module.exports = config
