const createServer = require('../helpers/create-server')
const { jsonPlaceHolder } = require('../../src/services/index')
const mockUsers = require('../mocks/users-mock.json')
const expectUsers = require('../expected/users-expect.json')

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

  it('Get All users an OK', async () => {
    sandbox.stub(jsonPlaceHolder, 'getUsers').resolves(mockUsers)
    await request.get('/users')
      .expect(200, expectUsers)
  })

  it('Get failed', async () => {
    await request.get('/')
      .expect(404)
  })
})
