/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-05 11:22:21
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-05 15:24:05
 * @FilePath: /nodejs/文件读取/中英文json合并.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')
const path = require('path')
// fs.existsSync(filePath) 判断目标路径的文件是否存在
const exists = filePath =>  fs.existsSync(filePath)
// process.argv 的结构如下：
// process.argv[0]：通常是 'node' 的路径，即执行当前脚本的 Node.js 可执行文件的完整路径。
// process.argv[1]：当前执行的 JavaScript 文件的路径。
// process.argv[2] 及之后的元素：传递给 Node.js 脚本的命令行参数。

// 当输入 node 中英文json合并.cjs ../文件读取 时对应的process.argv为
//    [
//      '/Users/jihongyu/.nvm/versions/node/v14.20.0/bin/node',
//      '/Users/jihongyu/Desktop/demo/nodejs/文件读取/中英文json合并.cjs',
//      '../文件读取'
//    ]
const jsonPath = process.argv[2]
if(!jsonPath) {
  console.log('没有传JSON目录参数')
  process.exit(1)
}
// process.cwd() 返回的是当前工作目录的字符串
// 用于构建当前工作目录下 jsonPath 文件的完整路径
const rootPath = path.join(process.cwd(), jsonPath)
// 遍历制定路径下的所有文件找到符合以.json结尾的文件路径数组
const walk = (path) => fs
  .readdirSync(path)
  .reduce((files, file) => {
    const filePath = path + '/' + file
    const stat = fs.statSync(filePath)
    if(stat.isFile()) {
      if(/(.*)\.(json)/.test(file)) {
        return files.concat(filePath)
      }
    }
    return files
  }, [])
// 合并指定目录下所有的.json文件内容
const mergeFileData = () => {
  // 拿到以.json结尾的文件路径数组
  const files = walk(rootPath)
  if(!files.length) process.exit(2)
  // 遍历数组 
  const data = files.filter(exists).reduce((total, file) => {
      const fileData = fs.readFileSync(file)
      // 使用 path.basename() 提取文件名并去除 '.json' 后缀  
      const baseName = path.basename(file, '.json')
      let fileJson
      try {
        // 拿到每个文件中的json数据
        fileJson = JSON.parse(fileData)
      } catch (err) {
        console.log('读出出错', file)
        console.log(err)
      }
      // 将提取文件名作为key，值作为value 
      total[baseName] = fileJson
      return total
  }, {}) 
  // JSON.stringify(data, null, 2) 是 JavaScript 中的一个函数调用，
  // 用于将一个 JavaScript 值（在这个例子中是 data）转换成一个 JSON 字符串。
  // 这个函数调用特别之处在于它使用了三个参数：
  // 要转换的值（data）,一个替换函数（null表示不使用替换函数），以及一个缩进空格数，用于美化输出的 JSON 字符串。
  // 参数解释
  // data：这是你想要转换成 JSON 字符串的 JavaScript 值。它可以是对象、数组、字符串、数字、布尔值或 null。
  // null（第二个参数）：这个参数是一个可选的替换函数，用于在字符串化之前修改对象的属性或值。如果传入 null 或 undefined，则不会使用替换函数。在这个例子中，我们传入 null，表示不进行任何替换。
  // 2（第三个参数）：这个参数是一个可选的空格数，用于美化输出的 JSON 字符串。它会在 JSON 字符串中增加缩进，以便于阅读。如果省略这个参数或传入 null，则不会有额外的空格；如果传入一个数字（如 2），则会在每个级别缩进指定的空格数；如果传入一个字符串（如 '\t'），则使用该字符串作为缩进字符。
  fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
}
mergeFileData()
