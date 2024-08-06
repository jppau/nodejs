module.exports = (url) => new Promise((resolve, reject) => {
  https.get(url, (req, res) => {
    let data = []
    req.on('data', chunk => {
      data.push(chunk)
    })
    req.on('end', () => {
      let body
      try {
        body = JSON.parse(data.join(''))
      } catch (error) {
        console.log('<===API服务器可能挂了，请稍后重试=====>')
      }
      resolve(body)
    })
  })
})