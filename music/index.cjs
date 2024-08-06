const names = require('./lib/names.cjs')
const EventEmitter = require('events')
class Emitter extends EventEmitter {}
const emittter = new Emitter()

;[
  'search',
  'choose',
  'find',
  'play'
].forEach(key => {
  const fn = require(`./lib/${key}`)
  emittter.on(key, async function(...args){
    const res = await fn(...args)
    this.emit('handler', key, res, ...args)
  })
})
emittter.on('afterSearch', function(data, q){
  if(!data || !data.result || !data.result.songs){
    console.log(`没有搜索到${key}相关结果`)
    return process.exit(1)
  }
  const songs = data.result.songs
  this.emit('choose', songs)
})
emittter.on('afterChoose', function(answer, songs){
  const arr = songs.filter((song, i) => {
    names(song, i) === answer.song
  })
  if(arr[0] && arr[0].id){
    this.emit('find', arr[0].id)
  }
})
emittter.on('afterFind', function(songs){
  if(songs[0] && songs[0].url){
    this.emit('play', songs[0].url)
  }
})
emittter.on('playing', function(player){
  player.on('playend', (item) => {
    this.emit('playEnd')
  })
})
emittter.on('playEnd', function(player){
  console.log('播放结束！')
  process.exit()
})
emittter.on('handler', function(key, res, ...args){
  switch (key) {
    case 'search':
      return this.emit('aferSearch', res, args[0])
    case 'choose':
      return this.emit('aferChoose', res, args[0])
    case 'find':
      return this.emit('aferFind', res)
    case 'play':
      return this.emit('playing', res)
  }
})
module.exports = emittter