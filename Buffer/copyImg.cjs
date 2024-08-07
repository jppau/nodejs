/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-07 17:17:03
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-07 17:21:16
 * @FilePath: /nodejs/Buffer/copyImg.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
fs.readFile('img.png', (err, buffer) => {
  console.log(Buffer.isBuffer(buffer) && 'readFile 读取图片拿到的是Buffer数据')
  fs.writeFile('logo.png', buffer, function(err){})
  const base64Image = Buffer.from(buffer).toString('base64')
  // console.log(base64Image)
  const decodedImage = Buffer.from(base64Image, 'base64')
  console.log(Buffer.compare(buffer, decodedImage))
  fs.writeFile('img_decoded.jpg', decodedImage, (err) => {})
})