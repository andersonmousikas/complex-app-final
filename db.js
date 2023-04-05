const { MongoClient } = require('mongodb')

require('dotenv').config()

const client = new MongoClient(process.env.CONNECTIONSTRING)

async function start() {
  await client.connect()
  module.exports = client
  const app = require('./app')
  app.listen(process.env.PORT, ()=> console.log('connected'))
}

start()

