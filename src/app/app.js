const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')					// 用于解析请求体
const userRouter = require('../router/user.router')
// userRouter.post('/路径', 处理函数)
//使路由中间件生效
app.use(bodyParser())								
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
//routes()把 router 里的所有规则，变成 Koa 中间件
//allowedMethods()方法不对时候会自动返回统一报错
module.exports = app