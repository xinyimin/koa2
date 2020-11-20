//处理业务逻辑的中间件，读取某个json文件
const path = require('path')
const fileUtils = require('../utils/file_utils') //引入Utils 文件夹中的自定义加载数据方法
module.exports = async (ctx, next) => {
    //文件路径url
    const url = ctx.request.url //请求路径/api/数据名（data文件加中的）
    let filePath = url.replace('/api', '')
    filePath = '../data' + filePath + '.json' //../data/json文件
    filePath = path.join(__dirname, filePath) //__dirname为当前文件的路径(F:\...\数据可视化\Project\koa_server)+(/data/json文件)
    try {
        //数据加载成功之后的响应体
        const ret = await fileUtils.getFileJsonData(filePath) //获取数异步包裹的数据
        ctx.response.body = ret  //设置响应体
    } catch (error){
        const errorMsg = {
            message: '读取文件内容失败，文件资源不存在',
            status: 404
        }
        ctx.response.body = JSON.stringify(errorMsg)  //json字符串转化
    }
    await next()
}