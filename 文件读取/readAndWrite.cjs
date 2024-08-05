const fs = require('fs')
const files = []
const walk = function(path){
  // fs.readdir(path, callback);读取目录，重点其回调函数中files对象
  // * path, 要读取目录的完整路径及目录名；
  // * [callback(err, files)]读完目录回调函数；
  // *   err错误对象
  // *   files数组，存放读取到的目录中的所有文件名
  fs.readdirSync(path).forEach(function(file){
    const newPath = path + '/' + file
    // 同步地获取文件或目录的状态信息
    // Stats {
    //   dev: 16777225,
    //   mode: 33188,
    //   nlink: 1,
    //   uid: 502,
    //   gid: 20,
    //   rdev: 0,
    //   blksize: 4096,
    //   ino: 8812203,
    //   size: 2678,
    //   blocks: 8,
    //   atimeMs: 1722826942869.7976,
    //   mtimeMs: 1722826881231.0535,
    //   ctimeMs: 1722826881231.0535,
    //   birthtimeMs: 1722826081791.9065,
    //   atime: 2024-08-05T03:02:22.870Z,
    //   mtime: 2024-08-05T03:01:21.231Z,
    //   ctime: 2024-08-05T03:01:21.231Z,
    //   birthtime: 2024-08-05T02:48:01.792Z
    // }
    const stat = fs.statSync(newPath)
    console.log(stat)
    if(stat.isFile()) {
      if(/\.cjs/.test(file)){
        files.push(file)
      }
    }else if(stat.isDirectory()) {
      walk(newPath)
    }
  })
}
walk('../文件读取')
console.log(files.join('\r\n'))