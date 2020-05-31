const cron = require('node-cron');
var task = cron.schedule('* * * * *',()=>{
    console.log("Run on Every Minute")
});

setTimeout(()=>{
    console.log("task is destroyed")
    task.destroy();
},10000)

var result = cron.validate('* * * * *');
console.log(result?'valid cron pattern':'Invalid pattern');
cron.schedule('* 23 * * Monday',()=>{

});