const http = require('http')

const homePage = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Node.js 部署上线示例</title>
    </head>
    <body>
      <h1>慕课网 Node.js 部署发布</h1>
    </body>
  </html>
`

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(homePage)
}).listen(4321, () => {
  console.log('Server running at 4321')
})