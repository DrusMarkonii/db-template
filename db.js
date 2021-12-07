const Pool = require('pg').Pool;
const pool = new Pool( {
    user: 'postgres',
    password: '298518422',
    host: 'localhost',
    port: 5432,
    database: ""
});

module.exports = pool;