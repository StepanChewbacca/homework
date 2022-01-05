const { Client } = require('pg');

const pgClient = new Client({
  user: 'maks',
  host: 'localhost',
  database: 'hwnode',
  password: '12345678',
  port: 5432,
});
pgClient.connect().then(() => console.log('Connected'));

module.exports = pgClient;
