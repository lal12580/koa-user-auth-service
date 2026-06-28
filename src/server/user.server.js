const connection = require('../app/database')						//访问数据库文件

class UserService {
  async create(user) {
    // 1. 解构用户信息
    const { name, password } = user
    // 2. 拼接statement
    const statement = 'INSERT INTO `user` (name, password) VALUES (?, ?);'
    // 3. 执行sql语句
    const [result] = await connection.execute(statement, [name, password])
    return result
  }
  // 查询用户
  async findUserByName(name) {
    const statement ='SELECT * FROM `user` WHERE name = ?;'
    const [users] = await connection.execute(statement, [name])
    return users
  }
}

module.exports = new UserService()






