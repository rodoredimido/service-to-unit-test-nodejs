const { jsonPlaceHolder } = require('../services')
const { logger } = require('../libs')
const scope = {
  scope: 'controller/posts'
}

const getPosts = async ctx => {
  const users = await jsonPlaceHolder.getPosts()
  logger.info('#getPosts, get a posts: ', users, scope)
  ctx.body = users
}

const addPosts = async ctx => {
  const { title, body, userId } = ctx.request.body
  logger.info('#addPosts, create a new posts: ',
    { paylodad: { title, body, userId } }, scope)
  ctx.status = 201
  ctx.body = await jsonPlaceHolder.addPost({ title, body, userId })
}

const editPosts = async ctx => {
  const { id } = ctx.params
  const { title, body, userId } = ctx.request.body
  console.log(`#editPosts, Edit a posts with id ${id}: `)
  logger.info(`#editPosts, Edit a posts with id ${id}: `,
    { paylodad: { title, body, userId } }, scope)
  ctx.body = await jsonPlaceHolder.editPost(id, { title, body, userId })
}

module.exports = {
  getPosts,
  addPosts,
  editPosts
}
