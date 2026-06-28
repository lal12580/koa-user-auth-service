const mysql = require('mysql2')
// 1. 创建连接池（推荐：生产/开发都用）
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'abc',   											// 改这里
  user: 'root',
  password: '200512',   												// 改这里
  connectionLimit: 10
})
// 2. 测试连接（可选，用于启动时检查）
connectionPool.getConnection((err, connection) => {
  //判断错误信息
  if (err) {
    console.log('获取连接失败', err)
    return
  }
  //获取connection，尝试和数据库建立连接
  connection.connect((err) => {
    if (err) {console.log('和数据库交互失败', err)} 
    else {console.log('数据库连接成功')}
  })
})
// 3. 获取连接池中连接对象promise，导出 promise 
const connection = connectionPool.promise()
module.exports = connection