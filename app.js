//服务器入口文件
//1.创建KOA的实例对象
const Koa = require('koa')
const app = new Koa()
//2.绑定中间件
//绑定第一层中间件
const resDurationMiddlewate = require('./middleware/koa_response_duration')
app.use(resDurationMiddlewate)
//绑定第二层中间件
const resHeaderMiddleware = require('./middleware/koa_response_header')
app.use(resHeaderMiddleware)
//绑定第三层中间件
const resDataMiddlewate = require('./middleware/koa_response_data')
app.use(resDataMiddlewate)
//3.绑定端口号：8888
app.listen(8888)