const { api: config } = require('../../configs')
const request = require('request-promise')

const checkGlobalHealth = () => request.get(`http://localhost:${config.port}/health`).then(JSON.parse)

const execute = ctx => {
  console.log('Requesting Health', { scope: 'HealthCheck' })
  checkGlobalHealth()
    // .then(getHealthStatus)
    .then(health => {
      ctx.body = health
    })
}

module.exports = {
  config: router => router.get('/health', execute)
}
