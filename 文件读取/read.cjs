/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-05 10:16:23
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-05 10:46:33
 * @FilePath: /nodejs/文件读取/read.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
fs.open('./a.txt', 'r', function(err, fd) {
  if(err) {
    return console.error('打开文件时出错：', err)
  }
  // fd: 文件描述符（读取到的文件）
  // buf: buffer参数，要读取的数据会写入这个buffer对象
  // offset: 写入buffer的起始位置
  // len: 写入buffer的长度
  // pos: 从什么位置开始读取文件
  // callback(err, bytesRead, buffer)
  // bytesRead: 读取了多少bytes
  // buffer: buffer读取到的数据
  let buf = Buffer.alloc(1024)
  let offSet = 0
  let len = buf.length
  let pos = 100
  fs.read(fd, buf, offSet, len, pos, function(err, bytes, buffer){
    if(err) {
      return console.error('读取文件时出错：', err)
    }
    console.log('读取到了' + bytes + 'bytes')
    console.log('内容为', buf.slice(0, bytes).toString())
    // 关闭文件
    fs.close(fd, function(err) {
      if(err) {
        return console.error('关闭文件时出错：', err)
      }
    })
  })
})