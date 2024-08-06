const request = require('./request')

module.exports = async (id) => {
  const url = 'http://api.imjad.cn/sloudmusic/?type=song&br=128000&id=' + id
  const { data } = await request(url)
  return data
}