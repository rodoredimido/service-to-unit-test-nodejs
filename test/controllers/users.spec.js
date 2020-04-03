const { users } = require('../../src/controllers')

describe('#controller/status ', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })
})