var cron = require('node-cron');
var logger = require('./logger');

exports.testcron = cron.schedule('*/1 * * * *', function(){

    logger.error('helloworl');



}).start();
