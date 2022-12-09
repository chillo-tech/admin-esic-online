const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "postgres"),
    connection: {
      host: env('DATABASE_HOST', 'admin-esic-online-db'),
      //port: env('DATABASE_PORT', 5432),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'postgres'),
      database: env('DATABASE_NAME', 'admin-esic-online')
    },
    debug: false,
  },
});
