const pad = '.'
exports.step = (t) => `|${pad.repeat(t)}》`
console.log(module)
// 输出:
// Module {
//   id: '/Users/jihongyu/Desktop/demo/nodejs/模块机制/step.cjs',
//   path: '/Users/jihongyu/Desktop/demo/nodejs/模块机制',
//   exports: { step: [Function (anonymous)] },
//   parent: Module {
//     id: '.',
//     path: '/Users/jihongyu/Desktop/demo/nodejs/模块机制',
//     exports: {},
//     parent: null,
//     filename: '/Users/jihongyu/Desktop/demo/nodejs/模块机制/race.cjs',
//     loaded: false,
//     children: [ [Circular *1] ],
//     paths: [
//       '/Users/jihongyu/Desktop/demo/nodejs/模块机制/node_modules',
//       '/Users/jihongyu/Desktop/demo/nodejs/node_modules',
//       '/Users/jihongyu/Desktop/demo/node_modules',
//       '/Users/jihongyu/Desktop/node_modules',
//       '/Users/jihongyu/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   },
//   filename: '/Users/jihongyu/Desktop/demo/nodejs/模块机制/step.cjs',
//   loaded: false,
//   children: [],
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