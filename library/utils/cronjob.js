var cron = require('node-cron');

cron.schedule('*/1 * * * *', function(){
    console.log('cron test');
}).start();
