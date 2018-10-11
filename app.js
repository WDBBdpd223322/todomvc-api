const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

process.on('uncaughtException', function (err) {
  //打印出错误
  console.log(err)
  //打印出错误的调用栈方便调试
  console.log(err.stack)
});

// 配置路由表
const todoRouter = require('./router/todoRouter')
app.use('/todos', todoRouter)

http.createServer(app).listen(8080, () => {
  console.log('success on port 8080! ^_^')
})