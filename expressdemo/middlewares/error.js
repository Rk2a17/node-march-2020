const error = (req,res,next)=>{
    const path = require('path')
    const p1 = path.normalize(__dirname+'/..')
    const finalPath = path.join(p1,'public/error.html');
    res.status(404).sendFile(finalPath)
};
module.exports = error;