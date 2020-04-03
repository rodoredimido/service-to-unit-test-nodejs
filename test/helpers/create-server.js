const agent = require('supertest')
const http = require('http')
const memoize = require('lodash/memoize')

const createServer = require('../../server/create-server')

let _app, _server
const createTestServer = memoize(async () => {
  const app = _app = await createServer()
  _server = http.createServer(
    app.callback()
  )

  await new Promise(
    (resolve, reject) => _server.listen(0, (err) => err ? reject(err) : resolve())
  )

  const req = agent(
    _server
  )

  req.app = app
  return req
})

before(() => {
  return createTestServer()
})

after((done) => {
  if (_app) {
    _server.close(done)
  }
})
module.exports = { createServer: createTestServer }
