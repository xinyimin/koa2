//读取文件的工具方法
const fs = require('fs')
module.exports.getFileJsonData = (filePath) => {
    //根据文件路径，读取文件的内容
    //包裹到异步函数
    return new Promise((resolve, rejects) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                //读取文件失败
                rejects(error)
            } else {
                //读取文件成功
                resolve(data)
            }
        })
    })
}