const request = require('request-promise')

const baseUrl = 'https://jsonplaceholder.typicode.com'

const optionsGet = url => ({
  method: 'GET',
  uri: url,
  json: true
})

const optionsPost = (url, data) => ({
  method: 'POST',
  uri: url,
  body: data,
  json: true,
  headers: {
    // eslint-disable-next-line quotes
    "Content-type": "application/json; charset=UTF-8"
  }
})

const optionsPUT = (url, data) => ({
  method: 'PUT',
  uri: url,
  body: data,
  json: true,
  headers: {
    // eslint-disable-next-line quotes
    "Content-type": "application/json; charset=UTF-8"
  }
})

const getUsers = async () =>
  request(optionsGet(`${baseUrl}/users`))

const getPosts = async () =>
  request(optionsGet(`${baseUrl}/posts`))

const addPost = async data =>
  request(optionsPost(`${baseUrl}/posts`, data))

const editPost = async (id, data) =>
  request(optionsPUT(`${baseUrl}/posts/${id}`, data))

module.exports = {
  getUsers,
  getPosts,
  addPost,
  editPost
}
