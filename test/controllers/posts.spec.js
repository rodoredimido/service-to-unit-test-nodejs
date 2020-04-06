const { posts } = require('../../src/controllers')
const { jsonPlaceHolder } = require('../../src/services')
const mockPosts = require('../mocks/posts-mock')

describe('#controller/posts ', () => {
  let sandbox

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  context('when get the all posts', () => {
    it('Returns all posts', async () => {
      const expected = {
        body: mockPosts
      }
      sandbox.stub(jsonPlaceHolder, 'getPosts').resolves(mockPosts)
      const ctx = {
        body: {}
      }
      await posts.getPosts(ctx)
      expect(ctx).to.be.eql(expected)
    })

    it('throw Error', async () => {
      const ctx = {
        body: {}
      }
      sandbox.stub(jsonPlaceHolder, 'getPosts').rejects()
      expect(posts.getPosts(ctx))
        .to.be.rejected
    })
  })

  context('when add a new posts', () => {
    it('Return a new Posts', async () => {
      const payload = {
        title: 'This is a Test 1',
        body: 'This is a test 1 test service',
        userId: 10
      }
      const ctx = {
        request: {
          body: payload
        },
        body: {}
      }
      const mockPost = {
        ...payload,
        id: 101
      }
      sandbox.stub(jsonPlaceHolder, 'addPost').resolves(mockPost)
      await posts.addPosts(ctx)
      expect(ctx.body).to.be.eql(mockPost)
    })

    it('throw Error addPost', async () => {
      const ctx = {
        body: {}
      }
      sandbox.stub(jsonPlaceHolder, 'addPost').rejects()
      expect(posts.addPosts(ctx))
        .to.be.rejected
    })
  })

  context('when update a posts', () => {
    it('Return a Posts updated', async () => {
      const payload = {
        title: 'This is a Test 1',
        body: 'This is a test 1 test service',
        userId: 10
      }

      const ctx = {
        params: {
          id: 1
        },
        request: {
          body: payload
        },
        body: {}
      }

      const mockPost = {
        ...payload,
        id: 1
      }
      sandbox.stub(jsonPlaceHolder, 'editPost').resolves(mockPost)
      await posts.editPosts(ctx)
      expect(ctx.body).to.be.eql(mockPost)
    })

    it('throw Error', async () => {
      const payload = {
        title: 'This is a Test 1',
        body: 'This is a test 1 test service',
        userId: 10
      }
      const ctx = {
        params: {
          id: 1
        },
        request: {
          body: payload
        },
        body: {}
      }

      sandbox.stub(jsonPlaceHolder, 'editPost').rejects()
      expect(posts.editPosts(ctx))
        .to.be.rejected
    })
  })
})
