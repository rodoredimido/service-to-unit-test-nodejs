const { Bristol } = require('bristol')
const palin = require('palin')

let logger
let config

// eslint-disable-next-line complexity
const init = (opts = {}) => {
  config = {
    nodeEnv: opts.nodeEnv || process.env.NODE_ENV,
    prod: opts.prod ? {
      file: (opts.prod.file) || 'server.log',
      formatter: (opts.prod.formatter) || 'commonInfoModel',
      lowestSeverity: (opts.prod.lowestSeverity) || 'warn'
    } : {
      file: 'server.log',
      formatter: 'commonInfoModel',
      lowestSeverity: 'warn'
    }
  }
  logger = new Bristol()
  config.nodeEnv === 'local' || config.nodeEnv === 'test' || config.nodeEnv === 'dev'
    ? logger.addTarget('console').withFormatter(palin)
    : logger.addTarget('file', { file: config.prod.file })
      .withFormatter(config.prod.formatter)
      .withLowestSeverity(config.prod.lowestSeverity)
  return logger
}

const instance = () => logger || init()

module.exports = {
  get instance () { return instance() },
  init,
  get config () { return config }
}
