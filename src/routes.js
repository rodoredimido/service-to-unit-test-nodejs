const Router = require('koa-router')
const { logger } = require('./libs')
const { users, posts } = require('./controllers')
const errorMiddleware = require('./middleware/erros')
const errorMessage = require('./constants/error')

const setRoutes = router => {
  router.get('/health', ctx => {
    ctx.body = { '/health': true }
  })

  router.get('/users', users.getUsers)
  router.get('/posts', posts.getPosts)
  router.post('/posts', posts.addPosts)
  router.put('/posts/:id', posts.editPosts)

  logger.info('Routers is created', { scope: 'Router' })
}

const createRouter = () => {
  logger.info('Create a routers', { scope: 'Router' })
  const router = new Router()
  router.use(errorMiddleware(logger, errorMessage))
  setRoutes(router)
  return router
}

module.exports = {
  routes: () => createRouter().routes()
}
