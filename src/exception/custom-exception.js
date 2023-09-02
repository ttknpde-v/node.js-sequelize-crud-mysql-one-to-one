module.exports = myException = {}
myException.handlerException = function (message) {
    const error = new Error(message)
    error.code = 'Found exception So end the process\n'+
        'cause was '+message
    return error
}
module.exports = myException
