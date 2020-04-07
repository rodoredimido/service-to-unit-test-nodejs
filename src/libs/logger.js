const winston = require('winston')
const config = require('../../configs')

const options = {
  file: {
    filename: 'server.log',
    maxsize: 5000000,
    maxFiles: 3
  },
  console: {
    level: 'info'
  }
}

// eslint-disable-next-line new-cap
const logger = new winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.json(),
    winston.format.colorize()
  ),
  defaultMeta: { service: 'node_app_test' },
  transports: [
    new winston.transports.File(options.file)
  ]
})

if (config.node_env === 'production') {
  logger.add(new winston.transports.Console(options.console))
} else {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}

module.exports = logger
