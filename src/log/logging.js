const path = require('../service/service-server').path
/* declare log object for exporting method */
module.exports = myLogging = {}
/* This class for logging on console */
class Logging {
    get winston () {
        const {createLogger , format , transports} = require('winston')
        return {createLogger , format , transports}
    }
    get log () {
        return this.winston.createLogger({
            level : 'silly' ,
            format : this.winston.format.
            combine(
                this.winston.format.label({label : path.basename(process.mainModule.filename)}) ,
                this.winston.format.timestamp({format : 'YYYY-MM-DD HH:mm:ss'}) ,
                this.winston.format.printf((info) => `${info.timestamp} ${info.level} [${info.label}] : ${info.message}`)
            ) ,
            transports : [ new this.winston.transports.Console ]
        })
    }
}

const logging = new Logging()

myLogging.log = logging.log // add method to object
/*
    seems to
    log : get log()
*/

module.exports = myLogging
