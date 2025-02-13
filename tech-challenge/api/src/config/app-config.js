require("dotenv").config();

const {
  NODE_ENV = "development",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  PORT,
} = process.env;

const baseConfig = {
  app: {
    port: PORT || 4000,
  },
  client: {
    url: process.env.CLIENT_URL || "http://localhost:3000",
  },
};

const config = {
  development: {
    ...baseConfig,
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
  },
  test: {
    ...baseConfig,
    db: {
      url: MONGO_DB_URL_TEST,
    },
  },
  production: {
    ...baseConfig,
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
  },
};

module.exports = {
  config: config[NODE_ENV],
};
