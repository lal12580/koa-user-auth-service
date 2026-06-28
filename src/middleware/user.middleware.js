const userServer = require('../server/user.server')
const {NO_NAME_OR_PASSWORD,USER_EXISTS} = require('../config/user.error')			
const { encryptPassword } = require('../utils/password')				//加密密码	

const AAA = async (ctx, next) => {
  // 验空
  const { name, password } = ctx.request.body
  if (!name || !password) {return ctx.app.emit('error', new Error(NO_NAME_OR_PASSWORD), ctx)}
  //存在不
  const users = await userServer.findUserByName(name)
  if (users.length) {return ctx.app.emit('error', new Error(USER_EXISTS), ctx)}
  //执行下一个中间件
  await next()
}
const BBB = async (ctx, next) => {
  const { password } = ctx.request.body		
  // 把明文密码变成 hash
  const hashPassword = await encryptPassword(password)
  ctx.request.body.password = hashPassword
  await next()
}
module.exports = {AAA,BBB}													//导出