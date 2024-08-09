/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-07 17:17:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-07 17:26:04
 * @FilePath: /nodejs/Buffer/copyImg.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
fs.readFile('img.png', (err, buffer) => {
  console.log(Buffer.isBuffer(buffer) && 'readFile 读取图片拿到的是Buffer数据')
  
  // 把读取到的 Buffer 数据，通过 fs writeFile 写入到一个新图片文件中
  fs.writeFile('logo.png', buffer, function(err){})
  
  // 再基于原始的 Buffer 创建一个新的 Buffer，通过 toString base64 解码为字符串打印出来
  const base64Image = Buffer.from(buffer).toString('base64')
  // console.log(base64Image)

  // base64Image 是 base64 后的字符串，传参给 from，同时指定编码生成一个新的 Buffer 实例
  const decodedImage = Buffer.from(base64Image, 'base64')

  // 比较两个 Buffer 实例的数据，并写入到一个新的图片中
  console.log(Buffer.compare(buffer, decodedImage))
  fs.writeFile('img_decoded.jpg', decodedImage, (err) => {})
})