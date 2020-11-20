//设置相应头的中间件
module.exports = async (ctx, next) => {
    //设置响应头
    const contentType = 'application/json; charset=utf-8'
    ctx.set('Content-Type', contentType)
    ctx.set("Access-Control-Allow-Origin", "*")
    ctx.set('Access-Control-Allow-Methods', "GET, POST, PUT, DELETE, OPTIONS")
    await next()
}