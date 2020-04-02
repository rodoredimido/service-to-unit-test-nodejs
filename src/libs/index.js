const lazyLoadLogger = require('./logger')

module.exports = {
  logger: lazyLoadLogger.instance
}
