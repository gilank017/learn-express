const client = require("mongoose")

const connection = () => {
  client.connect("mongodb://localhost:27017", {
    dbName: 'belajar_db'
  })
  const connection = client.connection
  connection.on('error', console.log.bind(console, 'Koneksi error'))
  connection.once('open', () => {
    console.log('Database Terkoneksi')
  })
}

module.exports = connection