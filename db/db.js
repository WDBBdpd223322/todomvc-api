const mysql = require('mysql')
const DBConfig = require('./DBConfig')
const pool = mysql.createPool(DBConfig.mysql)

const db = {
  getAll (callback, res) {
    pool.getConnection((err, connection) => {
      if (err) {
        res.json(500, {code: 500, msg: '数据库链接有误，请检查链接通道'})
        throw err
      }
      connection.query('SELECT * FROM todos', (err, result) => {
        if (err) {
          res.json(500, {code: 500, msg: 'sql语句有误，请检查参数后清新请求'})
          throw err
        }
        callback(result)
      })
      connection.release()
    })
  },
  ZSG (sql, callback, res) {
    pool.getConnection((err, connection) => {
      if (err) {
        res.json(500, {code: 500, msg: '数据库链接有误，请检查链接通道'})
        throw err
      }
      connection.query(sql, (err, result) => {
        if (err) {
          res.json(500, {code: 500, msg: 'sql语句有误，请检查参数后清新请求'})
          throw err
        }
        callback(result)
      })
      connection.release()
    })
  }
}

module.exports = db
