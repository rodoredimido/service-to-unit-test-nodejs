const {
  api: {
    cors: { allowed }
  }
} = require('../../configs')

const domains = allowed.filter(key => !!key)

module.exports = origin => domains.length > 0 && domains.some(domain => (origin.endsWith(domain) ? origin : ''))
