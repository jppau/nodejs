/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-05 10:16:23
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-05 11:00:28
 * @FilePath: /nodejs/文件读取/read.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')

// 方式一： 写入bufer数据
fs.open('./b.txt', 'w', function(err, fd) {
  if(err) {
    return console.error('打开文件时出错：', err)
  }
  // fd: 文件描述符（读取到的文件）
  // buf: buffer参数，要写入的数据会写入这个buffer对象
  // offset: 写入buffer的偏移量 写入一次就要修改一次保证数据的连续和完整性
  // len: 写入buffer的长度
  // pos: 从什么位置开始写入文件 没有则从指针位置开始
  // callback(err, bytesRead, buffer)
  // bytesRead: 写入了多少bytes
  // buffer: buffer写入的数据
  let buf = Buffer.from('今天也要加油鸭！')
  let offSet = 0
  let len = buf.length
  let pos = 0
  fs.write(fd, buf, offSet, len, pos, function(err, bytes, buffer){
    if(err) {
      return console.error('写入文件时出错：', err)
    }
    console.log('写入了' + bytes + 'bytes')
    console.log('内容为', buf.slice(0, bytes).toString())
    // 关闭文件
    fs.close(fd, function(err) {
      if(err) {
        return console.error('关闭文件时出错：', err)
      }
    })
  })
})

// 方式二：直接写入string
fs.open('./c.txt', 'a', function(err, fd) {
  if(err) {
    return console.error('打开文件时出错：', err)
  }
  // fd: 文件描述符（读取到的文件）
  // data: 要写入的string数据
  // pos: 从什么位置开始写入文件 没有则从指针位置开始
  // callback(err, written, string)
  // written: 写入了多少bytes
  // string: 写入的数据
  let data = '今天也要加油鸭！jpp'
  let pos = 0
  fs.write(fd, data, pos, 'utf-8', function(err, written, string){
    if(err) {
      return console.error('写入文件时出错：', err)
    }
    console.log('写入了' + written + 'bytes')
    console.log('内容为', string)
    // 关闭文件
    fs.close(fd, function(err) {
      if(err) {
        return console.error('关闭文件时出错：', err)
      }
    })
  })
})