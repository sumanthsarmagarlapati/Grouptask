import { env } from "process";

export default () => ({
  PORT: parseInt(env.PORT, 10) || 2001,
  MONGO_CONFIG: {
    uri: env.MONGO_URI,
    name: env.MONDO_DB_NAME,
    retryAttempts: 10,
    // synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true' || false,
  }
})