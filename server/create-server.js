const Koa = require('koa')
const Router = require('koa-router')
const convert = require('koa-convert')
const body = require('koa-body')
const cors = require('@koa/cors')
const originFilter = require('./cors/cors')
const routesV1 = require('../src/routes')

const health = require('./health/health')

const createServer = () => {
  const app = new Koa()
  const router = new Router()
  health.config(router)

  app.use(
    cors({
      origin: ({
        request: {
          header: { origin }
        }
      }) => originFilter(origin)
    })
  )
  app.use(convert(body()))
  app.use(routesV1.routes())

  return app
}

module.exports = createServer
