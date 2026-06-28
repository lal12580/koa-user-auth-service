const app = require('../app/app')
const {NO_NAME_OR_PASSWORD,USER_EXISTS} = require('../config/user.error')				

app.on('error', (error, ctx) => {
  //默认返回值
  let code = 0
  let message = ''

  

  const type = error.message
  switch (type) {
    case 'no_name_or_password':
      code = -1001
      message = '用户名或者密码不能为空'
      break
    case 'user_already_exists':
      code = -1002
      message = '用户名已经被占用，请输入新的用户名'
      break
    default:													//兜底错误
      code = -9999
      message = '未知错误'
  }
  ctx.body = { code, message }						//最终统一返回给前端的数据结构
})