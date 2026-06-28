const app = require('./src/app/app')
const { lal } = require('./src/config/server')


require('./src/utils/handle-error')	            //引入错误处理文件，监听错误事件

//启动服务器
app.listen(lal,()=>{
    console.log('服务器启动成功')
})						
// 