const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'strapiDB',
      port: env.int('DATABASE_PORT', 5432),
      user: 'postgres',
      password: 'postgres',
      database: 'db-esic-online'
    },
    useNullAsDefault: true,
  },
});
