/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-07 16:30:52
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-07 17:01:54
 * @FilePath: /nodejs/Buffer/index.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const buf = Buffer.from('hello, jpp!你好, jpp!')
console.log(buf, 1)

const buf1 = Buffer.from([0x48, 0x46, 0x6c, 0x6c, 0x6f, 0x20, 0xe6, 0x8e, 0x98, 0xe9, 0x87, 0x91])
console.log(buf1)

const buf2 = Buffer.from('hello, jpp', 'utf-8')
console.log(buf2)
console.log(buf2.toString())
console.log(buf2.toString('utf-8'))
console.log(buf2.toString('utf16le'))

let bufForWrite = Buffer.alloc(32)  
bufForWrite.write('Hello 掘金', 0, 9)  
console.log(bufForWrite.toString()) 

let bufFromArr1 = Buffer.from([1, 2, 3, 4, 5]) 
let bufFromArr2 = bufFromArr1.slice(2, 4)  
console.log(bufFromArr2)

let bufCopy1 = Buffer.from('Hello')  
let bufCopy2 = Buffer.alloc(5)  
console.log(bufCopy1)  
bufCopy1.copy(bufCopy2, 1, 1, 5)  
console.log(bufCopy2)  
console.log(bufCopy2.toString())  