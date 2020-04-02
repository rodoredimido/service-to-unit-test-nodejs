const config = require('../configs')
const { logger } = require('../src/libs/index')
const createServer = require('./create-server')

const scope = {
  scope: 'Starting/Server'
}

const { port: PORT, env: NODE_ENV } = config.api

const app = createServer()
app.listen(PORT, () => {
  logger.info(`Server listening on ${PORT} in ${NODE_ENV} environment`, scope)
})
