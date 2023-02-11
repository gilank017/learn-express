const dotenv = require("dotenv")
const client = require("mongoose")

const env = dotenv.config().parsed

client.set("strictQuery", false)
const connection = () => {
  client.connect(env.MONGOODB_URL, {
    dbName: env.DATABASE_NAME
  })
  const connection = client.connection
  connection.on('error', console.log.bind(console, 'Koneksi error'))
  connection.once('open', () => {
    console.log('Database Terkoneksi')
  })
}

module.exports = connection