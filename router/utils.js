const db = require('../db/db')
const url = require('url')

const utils = {
  getDataAll (req, res) {
    db.getAll((result) => {
      res.json(200, {
        data: result,
        meta: {
          code: 200,
          msg: '获取列表成功'
        }
      })
    }, res)
  },
  addTodo (req, res) {
    const {body} = req
    const sql = `INSERT INTO todos VALUES(NULL, '${body.content}', '${body.isFinish}')`
    db.ZSG(sql, result => {
      if (result) {
        res.json(200, {
          meta: {
            code: 201,
            msg: '添加数据成功'
          },
          data: null
        })
      }
    }, res)
  },
  delTodo (req, res) {
    const urlObj = url.parse(req.url, true)
    const {id} = urlObj.query
    const sql = `DELETE FROM todos WHERE id in(${id})`
    db.ZSG(sql, result => {
      if (result) {
        res.json(200, {
          meta: {
            code: 202,
            msg: '删除数据成功'
          },
          data: null
        })
      }
    }, res)
  },
  changeStatu (req, res) {
    const {id, isFinish} = req.body
    const sql = `UPDATE todos SET isFinish='${isFinish}' WHERE id='${id}'`
    db.ZSG(sql, result => {
      if (result) {
        res.json(200, {
          meta: {
            code: 203,
            msg: '修改状态成功'
          },
          data: null
        })
      }
    }, res)
  },
  changeStatusAll (req, res) {
    const urlObj = url.parse(req.url, true)
    const {isFinish} = urlObj.query
    let sql = ''
    if (isFinish === 'true') {
      sql = `UPDATE todos SET isFinish='1' WHERE isFinish='0'`
    } else {
      sql = `UPDATE todos SET isFinish='0' WHERE isFinish='1'`
    }
    db.ZSG(sql, result => {
      if (result) {
        res.json(200, {
          meta: {
            code: 203,
            msg: '修改全部状态成功'
          },
          data: null
        })
      }
    }, res)
  },
  changeContent (req, res) {
    const {content, id} = req.body
    const sql = `UPDATE todos SET isFInish='0',content='${content}' WHERE id=${id}`
    console.log(sql)
    db.ZSG(sql, result => {
      if (result) {
        res.json(200, {
          meta: {
            code: 203,
            msg: '数据修改成功'
          },
          data: null
        })
      }
    }, res)
  }
}

module.exports = utils
