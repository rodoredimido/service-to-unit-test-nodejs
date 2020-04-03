const getUserBySuite = users => users.filter(user => user.address.suite.includes('Suite'))

module.exports = {
  getUserBySuite
}
