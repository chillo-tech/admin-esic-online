const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      port: 25432,
    },
    useNullAsDefault: true,
  },
});
