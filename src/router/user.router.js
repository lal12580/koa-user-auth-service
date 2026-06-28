const KoaRouter = require('@koa/router')
const { usercontroller } = require('../controller/user.controller')
const {AAA,BBB} = require('../middleware/user.middleware')
//注册路由对象
const userRouter = new KoaRouter({prefix: '/users'})//prefix统一加前缀/users
//注册接口
userRouter.get('/list', usercontroller.list)
userRouter.post('/', AAA,BBB,usercontroller.create)		//注册接口，路径为/users/，中间件AAAA，处理函数usercontroller.name
module.exports = userRouter
