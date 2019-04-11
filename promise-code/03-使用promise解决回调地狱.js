const fs = require('fs')

function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}

//注意 通过.then指定回调函数的时候，成功的回调函数必须传，但是失败的回调可以忽略
// getFileByPath('./files/1.txt')
//     .then(function (data) {
//         console.log(data)
//     })

//先读取文件1，再读取文件2，最后读取文件3
//如果前面的promise执行失败，我们不想让后续的promise被终止，可以为每个promise指定失败的回调
getFileByPath('./files/111.txt')
    .then(function (data) {
        console.log(data)
        return getFileByPath('./files/2.txt')
    }, function (err) {
        console.log('这是失败的回调:' + err.message)
        return getFileByPath('./files/2.txt')
    })
    .then(function (data) {
        console.log(data)
        return getFileByPath('./files/3.txt')
    }, function (err) {
        console.log('这是失败的回调:' + err.message)
        return getFileByPath('./files/3.txt')
    })
    .then(function (data) {
        console.log(data)
    })

    console.log('okkkkok')