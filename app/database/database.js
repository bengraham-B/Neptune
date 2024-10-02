const Pool = require('pg').Pool

const pool = new Pool({
    host: "localhost",
    user: process.env.DATABASE_USERNAME,
    // port: process.env.DATABASE_PORT, 
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    ssl: {
        require: true,
      },
    sslrootcert:'/server.crt'
})

module.exports = pool