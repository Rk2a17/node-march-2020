const express = require('express');
const coursesRoutes = express.Router();
coursesRoutes.get('/getcourse',(req,res)=>{

});

coursesRoutes.get('/searchcourse',(req,res)=>{
    res.send("u search for this course"+req.query.cname)
});

coursesRoutes.get('/addcourse',(req,res)=>{
    res.send("Add course called......")
});

coursesRoutes.get('/profile',(req,res)=>{
    res.send("Course profile is -------> "+req.query.userid);
});

module.exports = coursesRoutes;