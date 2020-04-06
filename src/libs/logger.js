const winston = require('winston')
const config = require('../../configs')

const console = new winston.transports.Console({ level: 'info' })
const file = new winston.transports.File({ filename: 'combined.log' })

const logger = winston.createLogger({
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
    console,
    file
  ]
})

if (config.node_env !== 'production') {
  logger.remove(console)
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}

module.exports = logger
