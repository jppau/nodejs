/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-08 11:22:28
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-08 11:30:12
 * @FilePath: /nodejs/streamAndPipe/severPipe.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
const http = require('http')
http.createServer((req, res) => {
  res.writeHeader(200, {'Context-Type': 'text/html'})
  fs.createReadStream('../模块机制/video/mixkit-aerial-view-of-people-surfing-1074-hd-ready.mp4').pipe(res)
}).listen(3000)