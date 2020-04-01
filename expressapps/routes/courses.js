const express = require('express');
const courseRoutes = express.Router();

courseRoutes.get('/getcourse',(req,res)=>{


});

courseRoutes.get('/searchcourse ',(req,res)=>{
    res.send("you search for this course "+req.query.cname);
})

courseRoutes.get('/addcourse',(req,res)=>{
    res.send("Add Course Called.... ")

});

courseRoutes.get('/profile',(req, res)=>{
    res.send('course profile is ------>'+req.query.userid)
})



module.exports = courseRoutes;