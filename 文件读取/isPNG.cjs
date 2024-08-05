//  PNG 头部 8 bytes是固定的，所以拿到文件前 8 bytes就可以作为判断的条件
const fs = require('fs')
fs.open('11.png', 'r', function(err, fd){
  let header = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  let buf = Buffer.alloc(8)
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, buffer){
    if(header.toString() === buffer.toString()){
      console.log('是png图片')
    }else{
      console.log('不是png图片')
    }
  })
})