const fs=require('fs')
const path=require('path')

// function getReadFile(fpath,sucCd,errCd){
//     fs.readFile(fpath,'utf-8',(err,dataStr)=>{
//         if(err) return errCd(err)
//         sucCd(dataStr)
//     })
// }

// getReadFile(path.join(__dirname,'./txt/a.txt'),
// function(data){console.log(data+"我成功了")},
// function(err){console.log("失败的感觉"+err)},
// )
//异步嵌套的调用,很多层回调地狱

// getReadFile(path.join(__dirname,'./txt/aa.js'),function(data){
//     console.log(data)
//     getReadFile(path.join(__dirname,'./txt/bb.js'),function(data){
//         console.log(data)
//         getReadFile(path.join(__dirname,'./txt/cc.js'),function(data){
//             console.log(data)
//         })
//     })
// })

//使用es6的promise来解决回调地狱的问题，不能减少代码量，多层的嵌套改为串联式的
/*
.getReadFile()
.then()
.then()
1.Promise是一个构造函数，可以new，consolg.dir(Promise)
2.里面包含两个函数 resolve成功之后做的事情，reject()失败后的回调函数
3.实例后可以调用.then的方法
4.Promise表示一个异步操作，new一个就创建一个异步操作
*/


function getReadFile(fpath) {
return new Promise(function(resolve,reject){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) return reject(err)
        resolve(dataStr)
    })
})
 }

// getReadFile('./txt/aa.txt')
//  .then(function(data){
//         console.log(data)
//         },
//     function (err) {
//         console.log(err)
//         }
//  )
//失败的可以不传
getReadFile('./txt/aa.txt')
 .then(function(data){
        console.log(data)
        return getReadFile('./txt/bb.txt')
        }
 ).then(
    function(data){
        console.log(data)
        return getReadFile('./txt/cc.txt')
        }
 )
 .then(
    function(data){
        console.log(data)
    }
 ).catch(function(err){
        console.log("这是promise自己的处理方式"+err.message)
 })