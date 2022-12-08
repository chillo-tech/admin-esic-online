const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'db-esic-online'
    },
    useNullAsDefault: true,
  },
});
