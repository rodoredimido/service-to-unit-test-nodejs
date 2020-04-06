const createServer = require('../helpers/create-server')

describe('GET /health', () => {
  let request

  beforeEach(async () => {
    request = await createServer.createServer()
  })

  it('Get an OK', async () => {
    const expected = { '/health': true }

    await request.get('/health')
      .expect(200, expected)
  })

  it('Get failed', async () => {
    await request.get('/')
      .expect(404)
  })
})
