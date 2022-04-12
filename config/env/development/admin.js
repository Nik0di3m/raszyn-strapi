module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84c7311b6494a2e79f4b862c5e0cd3b0'),
  },
});
