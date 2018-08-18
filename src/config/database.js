if(process.env.NODE_ENV === undefined){
  require('dotenv').config();
}

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOSTNAME,
  dialect: process.env.DIALEC,
};  
