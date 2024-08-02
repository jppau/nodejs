/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-08-01 10:50:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-01 10:52:25
 * @FilePath: /nodejs/模块机制/race.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { step } = require('./step.cjs')
const steps = step(10)
module.exports = { steps }
console.log(steps) // 输出：|..........》
console.log(module)
// 输出
// Module {
//   id: '.',
//   path: '/Users/jihongyu/Desktop/demo/nodejs/模块机制',
//   exports: { steps: '|..........》' },
//   parent: null,
//   filename: '/Users/jihongyu/Desktop/demo/nodejs/模块机制/race.cjs',
//   loaded: false,
//   children: [
//     Module {
//       id: '/Users/jihongyu/Desktop/demo/nodejs/模块机制/step.cjs',
//       path: '/Users/jihongyu/Desktop/demo/nodejs/模块机制',
//       exports: [Object],
//       parent: [Circular *1],
//       filename: '/Users/jihongyu/Desktop/demo/nodejs/模块机制/step.cjs',
//       loaded: true,
//       children: [],
//       paths: [Array]
//     }
//   ],
//   paths: [
//     '/Users/jihongyu/Desktop/demo/nodejs/模块机制/node_modules',
//     '/Users/jihongyu/Desktop/demo/nodejs/node_modules',
//     '/Users/jihongyu/Desktop/demo/node_modules',
//     '/Users/jihongyu/Desktop/node_modules',
//     '/Users/jihongyu/node_modules',
//     '/Users/node_modules',
//     '/node_modules'
//   ]
// }