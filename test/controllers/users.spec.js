const { users } = require('../../src/controllers')
const { jsonPlaceHolder } = require('../../src/services')
const mockUsers = require('../mocks/users-mock')
const expectedUsers = require('../expected/users-expect')

describe('#controller/users ', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  context('when get the all users', () => {
    it('Returns all users', async () => {
      const expected = {
        body: expectedUsers
      }
      sandbox.stub(jsonPlaceHolder, 'getUsers').resolves(mockUsers)
      const ctx = {
        body: {}
      }
      await users.getUsers(ctx)
      expect(ctx).to.be.eql(expected)
    })

    it('throw Error', async () => {
      const ctx = {
        body: {}
      }
      sandbox.stub(jsonPlaceHolder, 'getUsers').rejects()
      expect(users.getUsers(ctx))
        .to.be.rejected
    })
  })
})
