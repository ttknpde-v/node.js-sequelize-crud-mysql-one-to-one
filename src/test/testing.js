const log = require('../log/logging').log
const app = require('../service/service-server').buildApp.express()
const routers = require('../router/routers')

app.use('/api/employee' , routers.routerEmployee)
app.use('/api/login' , routers.routerLogin)
app.listen(5000,(errors) => {if (errors) throw errors})