const createServer = require('../helpers/create-server')
const { jsonPlaceHolder } = require('../../src/services/index')
const mockPosts = require('../mocks/posts-mock.json')

describe('GET /users', () => {
  let request
  let sandbox

  beforeEach(async () => {
    request = await createServer.createServer()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('Get All posts an OK', async () => {
    sandbox.stub(jsonPlaceHolder, 'getPosts').resolves(mockPosts)
    await request.get('/posts')
      .expect(200, mockPosts)
  })

  it('Get failed', async () => {
    await request.get('/postss')
      .expect(404)
  })
})

describe('POST /users', () => {
  let request
  let sandbox

  beforeEach(async () => {
    request = await createServer.createServer()
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  const payload = {
    title: 'This is a Test 1',
    body: 'This is a test 1 test service',
    userId: 10
  }

  it('Get All posts an OK', async () => {
    sandbox.stub(jsonPlaceHolder, 'addPost').resolves({ ...payload, id: 101 })
    await request.post('/posts')
      .send(payload)
      .expect(201, { ...payload, id: 101 })
  })

  it('Get failed', async () => {
    await request.get('/postss')
      .expect(404)
  })
})
