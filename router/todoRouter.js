const express = require('express')
const utils = require('./utils')
const router = express.Router()

router
  .use('', (req, res, next) => {
    const reqOrigin = req.header('origin')

    if (reqOrigin !== undefined) {
      res.header("Access-Control-Allow-Origin", "*")
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
      res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    }

    next()
  })

router
  .get('/getDataAll', utils.getDataAll)
  .post('/addTodo', utils.addTodo)
  .delete('/delTodo', utils.delTodo)
  .delete('/delAll', utils.delTodo)
  .put('/changeStatu', utils.changeStatu)
  .get('/changeStatusAll', utils.changeStatusAll)
  .put('/changeContent', utils.changeContent)

module.exports = router
