const bcrypt = require('bcrypt')
const saltRounds = 10
// 为加盐的复杂度，数值越大 → 加密越慢 → 安全性越高（但性能消耗也更大）
// 🔐 加密——这里bcrypt.hash(明文密码, 加盐次数)，密码转成加密后的hash
async function encryptPassword(password) {
return await bcrypt.hash(password, saltRounds)	
}
// 🔍 校验——bcrypt.compare(明文密码, 已加密的hash)，返回值true才密码正确
async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash)
}
module.exports = {encryptPassword,comparePassword}