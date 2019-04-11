const fs = require('fs')
const path = require('path')

// function getFileByPath(fpath){
//   var promise=new Promise(function(){
//       fs.readFile(fpath,'utf-8',(err,dataStr)=>{
//           if(err) throw err
//           console.log(dataStr)
//       })
//   })
// }


function getFileByPath(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if (err) throw reject(err)
      resolve(dataStr)
    })
  })
}

// getFileByPath('./files/2.txt')

getFileByPath('./files/2.txt')
  .then(function (data) {
    console.log(data + '--------------')
  }, function (err) {
    console.log(err.message)
  })