# 服务器使用

- 下载服务器文件和依赖
```shell
$ git clone https://github.com/WDBBdpd223322/todomvc-api.git
$ cd todomvc-api/
$ npm i
```

- 修改数据库链接信息
  - 打开 `db` 文件夹
  - 打开 `DBConfig.js` 文件
  - 修改 `password`

- 将 `todomvc.sql` 文件导入数据库，默认数据库名称叫做 `todomvc`

- 启动项目
```shell
$ npm start
```

# todomvc 接口文档

- 基准地址 `http://localhost:8080`

## 获取全部列表

- 请求接口 `/todos/getDataAll`

- 请求方式 `get`

- 携带参数 `无`

- 响应参数

  ```javascript
  {
    data: [
      {
        id: 1,
        content: '吃饭',
        isFinish: 1
      },
      {
        id: 2,
        content: '睡觉',
        isFinish: 0
      }
    ],
    meta: {
  	code: 200,
      msg: '获取列表成功'
    }
  }
  ```

  ​

## 增加一条数据

- 请求接口 `/todos/addTodo`

- 请求方式 `post`

- 携带参数

  ```javascript
  data: {
    content: '吃饭',  // 必须携带，新增 todo 的内容
    isFinish: 0      // 必须携带，新增 todo 的状态
  }
  ```

- 响应参数

  ```javascript
  {
    data: null,
    meta: {
  	code: 201,
      msg: '添加数据成功'
    }
  }
  ```



## 删除一条数据

- 请求接口 `/todos/delTodo`

- 请求方式 `delete`

- 携带参数

  ```javascript
  ?id=1  // 必须携带，要删除的 todo 的 id
  ```

- 响应参数

  ```javascript
  {
    data: null,
    meta: {
  	code: 202,
      msg: '删除数据成功'
    }
  }
  ```



## 删除多条数据

- 请求接口 `/todos/delAll`

- 请求方式 `delete`

- 携带参数

  ```javascript
  ?id=1,2,3  // 必须携带，要删除的 todo 的 id，中间用逗号间隔
  ```

- 响应参数

  ```javascript
  {
    data: null,
    meta: {
  	code: 202,
      msg: '删除数据成功'
    }
  }
  ```



## 改变一条状态

- 请求接口 `/todos/changeStatu`

- 请求方式 `put`

- 携带参数

  ```javascript
  data: {
    id: 1,          // 必须携带，要修改的 todo 的 id
    isFinish: true  // 必须携带，更新后的状态
  }
  ```

- 响应参数

  ```javascript
  {
    data: null,
    meta: {
  	code: 203,
      msg: '修改状态成功'
    }
  }
  ```



## 改变全部状态

- 请求接口 `/todos/changeStatusAll`

- 请求方式 `get`

- 携带参数

  ```javascript
  ?isFinish=true
  ```

- 响应参数

  ```javascript
  {
    data: null,
    meta: {
  	code: 203,
      msg: '修改状态成功'
    }
  }
  ```



## 修改一条内容

- 请求接口 `/todos/changeContent`

- 请求方式 `put`

- 携带参数

  ```javascript
  data: {
    content: '睡觉',  // 必须携带，要更新的 todo 的内容
    id: 1            // 必须携带，要更新的 todo 的 id
  }
  ```

- 响应参数

  ```javascript
  {
    data: null,
    meta: {
  	code: 203,
      msg: '修改数据成功'
    }
  }
  ```

