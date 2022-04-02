module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '956de5183cd445798de4b36f025bc4f2'),
  },
});
