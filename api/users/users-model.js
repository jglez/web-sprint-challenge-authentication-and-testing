// Create model functions
const db = require('../../data/dbConfig.js')

function findById(id) {
  return db('users').where({ id }).first()
}

async function register(user) {
  const [id] = await db('users').insert(user, 'id')
  return findById(id)
}

module.exports = {
  register
}