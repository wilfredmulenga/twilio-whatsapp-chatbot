const { Client } = require('pg')

const pgClient = new Client({
  // connectionString: process.env.DATABASE_URL,
  // ssl: true
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

module.exports = { pgClient }
