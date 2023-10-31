const path = require('path');
const fs = require('fs')
const forge = require('node-forge');

let envFilePath = process.env.NODE_ENV;
console.log(envFilePath)
if (!envFilePath){
    envFilePath = 'dev'
}
require('dotenv').config({path: path.resolve(__dirname, `.${envFilePath}.env`)});

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.APP_PORT,
    logLevel: process.env.LOG_LEVEL,
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    templatesPath: process.env.TEMPLATES_PATH,
    whitelistPath: process.env.WHITELIST_PATH,
    redisOtpStorageTTL: +process.env.REDIS_OTP_STORAGE_TTL,
    dbConnectionString: process.env.DB_CONNECTION_STRING,
    dbSslCertPath: path.join(__dirname, process.env.SSL_CERT_PATH)
}