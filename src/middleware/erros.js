/* eslint-disable complexity */
const clone = require('lodash.clonedeep')

const defaultErrorMessage = {
  INVALID_REQUEST: {
    status: 400,
    body: { code: 2, message: 'invalid parameters for requisition' }
  }
}

const defaultError = {
  BAD_REQUEST: {
    status: 500,
    body: { code: 1, message: 'error processing the requisition' }
  }
}

const errorCreator = (logger = { error: {} }, customMessage = {}) => {
  const message = { ...defaultErrorMessage, ...customMessage }
  const errorMiddleware = async (ctx, next) => {
    try {
      return await next()
    } catch (err) {
      logger.error(err)
      const response = clone(err ? message[err.message || err] || defaultError : defaultError)
      if (!err) {
        response.body = { ...response.body }
      } else if (err.desciptor) {
        response.body = { ...response.body, ...err.desciptor }
      }
      ctx.status = response.status
      ctx.body = response.body
    }
  }
  return errorMiddleware
}

module.exports = errorCreator
