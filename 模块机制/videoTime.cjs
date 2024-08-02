/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-01 17:39:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-01 19:27:34
 * @FilePath: /nodejs/模块机制/videoTime.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const util = require('util')
const open = util.promisify(fs.open)
const read = util.promisify(fs.read)
function getTime(buffer){
  const start = buffer.indexOf(Buffer.from('mvhd')) + 17
  const timeScale = buffer.readUInt32BE(start)
  const duration = buffer.readUInt32BE(start + 4)
  const movieLength = Math.ceil(duration / timeScale)
  return movieLength
}
function getLocationTime(seconds){
  return moment.duration(seconds, 'seconds').toJSON().replace(/[PTHMS]/g, str => {
    switch(str){
      case 'H': return '小时'
      case 'M':return '分钟'
      case 'S':return '秒'
      default:return ''
    }
  })
}
;(async function(){
  const dir = path.resolve(__dirname + '/video')
  const files = fs.readdirSync(dir).map(file => path.resolve(dir, file))
  const vides = await Promise.all(
    files.map(async file => {
      const fd = await open(file, 'r')
      const buff = Buffer.alloc(100)
      const { buffer } = await read(fd, buff, 0, 100, 0)
      const time = getTime(buffer)
      return { file, time }
    })
  )
  const res = {
    '视频时长':vides.length,
    '视频总时长': getLocationTime(
      vides.reduce((pre, e) => {
        return pre + e.time
      }, 0)
    ),
    'vide': vides
  }
  console.log(res)
  return res
})()