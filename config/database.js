const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'strapiDB',
      user: 'postgres',
      password: 'postgres',
      database: 'db-esic-online'
    },
    useNullAsDefault: true,
  },
});
