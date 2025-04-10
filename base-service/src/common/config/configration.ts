export default () => ({
  env: process.env.NODE_ENV,
  database: {
    name: process.env.DATABASE_NAME,
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: process.env.DATABASE_LOGGING,
    synchronize: process.env.DATABASE_SYNCHRONIZE,
  },
});
