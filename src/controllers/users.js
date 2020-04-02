const { jsonPlaceHolder } = require('../services')
const { logger } = require('../libs')
const scope = {
  scope: 'controller/users'
}

const getUsers = async ctx => {
  const users = await jsonPlaceHolder.getUsers()
  logger.info('#getUsers, Get all Users: ', users, scope)
  ctx.body = users
}

module.exports = {
  getUsers
}
