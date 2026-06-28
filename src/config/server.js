require('dotenv').config()
const { LAL} = process.env		
module.exports = {
  lal: parseInt(LAL)
}
