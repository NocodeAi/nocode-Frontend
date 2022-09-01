const mysql = require("mysql")
const { sequelize } = require('nocodeAi-helpers')
const config = require('./config')

const connectDB = (cloudConfig = config) => sequelize.init(cloudConfig)

const nocodeAi = connectDB(process.env.NODE_ENV === 'production' ? config.production : process.env.NODE_ENV === 'cloudDB' ? config.cloudDB : config.development)



// module.exports = db;
module.exports = {
    nocodeAi
}