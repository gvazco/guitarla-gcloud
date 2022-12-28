module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '104.198.27.100'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'react-strapi'),
      user: env('DATABASE_USERNAME', 'gvazco'),
      password: env('DATABASE_PASSWORD', 'HydroHierba_6'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
