/* declare serviceServer object for exporting methods */
module.exports = serviceServer = {}
/* this class uses to build server */
class ServiceServer {
    constructor() {
        console.log('ServiceServer constructor was using')
    }
    get path () {
        return require('path')
    }
    get buildApp () {
        return {
            /* return object */
            express : require('express') ,
            bodyParser : require('body-parser')
        }
    }
}

const service = new ServiceServer() // create object because I did build method and need to use outside class

serviceServer.path = service.path // add method to obj
serviceServer.buildApp = service.buildApp // add method  to obj

module.exports = serviceServer

