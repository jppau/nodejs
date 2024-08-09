/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-08 11:20:11
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-08 11:21:18
 * @FilePath: /nodejs/streamAndPipe/pipe.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 拿到 stream 里面的可读可写流接口  
const Readable = require('stream').Readable  
const Writeble = require('stream').Writable  
const rs = new Readable()  
const ws = new Writeble()  
let n = 0  
// 一次次往流里面推数据  
rs.push('I ')  
rs.push('Love ')  
rs.push('Juejin!\n')  
rs.push(null)  
// 每一次 push 的内容在 pipe 的时候  
// 都会走到 _write 方法，在 _write 里面可以再做处理  
ws._write = function(chunk, ev, cb) {  
    console.log(cb)
    n++  
    console.log('chunk' + n + ': ' + chunk.toString())  
    // chunk1: I  
    // chunk2: Love  
    // chunk3: Juejin!  
    cb()  
}  
// pipe 将两者连接起来，实现数据的持续传递，我们可以不去关心内部数据如何流动  
rs.pipe(ws)