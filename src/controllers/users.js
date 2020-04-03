const { jsonPlaceHolder } = require('../services')
const { logger } = require('../libs')
const { getUserBySuite } = require('../utils/filters-array')
const scope = {
  scope: 'controller/users'
}

const getUsers = async ctx => {
  const users = getUserBySuite(await jsonPlaceHolder.getUsers())
  logger.info('#getUsers, Get all Users: ', users, scope)
  ctx.body = users
}

module.exports = {
  getUsers
}
