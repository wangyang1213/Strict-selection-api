//获取基础配置
const configs = require('./config');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: configs.mysql.host,
  port: configs.mysql.port,
  user: configs.mysql.user,
  password: configs.mysql.pass,
  database: configs.mysql.db
});


//将基础配置和sdk.config 合并 导出初始化完成的sdk
module.exports = { connection: connection }
