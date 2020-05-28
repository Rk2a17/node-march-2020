const express = require('express');
const userRoutes = express.Router();
userRoutes.get('/register/:userid',(req,res)=>{
    res.send("Userid is "+req.params.userid);
})

userRoutes.get('/profile',(req,res)=>{
    res.send("Userid is :::::: "+req.query.userid);
})

userRoutes.get('/login',(request,response)=>{
    console.log("request from GET is" ,request.query);
    // response.status(200).send("welcome user");
    // response.status(404).send("Resource not found");

    response.redirect('/dashboard?userid='+request.query.userid);
});


userRoutes.get('/dashboard',(req,res)=>{
    // res.status(200).send("<h1>Welcome User, U Are On Dashboard PAGE</h1>")
    console.log('Userid in dashboard is ',req.query.userid);
  /*  const path = require('path')
    const p1 = path.normalize(__dirname+'/..')
    const fullpath = path.join(p1,'/public/dashboard.html');
    res.sendFile(fullpath); */
    var phones = [1111,2222,3333,4444,5555];
    var obj = {uid:req.query.userid, email:'rohit@gmail.com','phone':phones}
    res.render('dashboardpage',obj);
})


userRoutes.post('/login',(request,response)=>{
    console.log("Request Body is ", request.body);
    var userObject = request.body;

    if(userObject.userid==userObject.pwd){
        response.redirect('/dashboard');
        // response.send('Welcome User ' +userObject.userid);
    }
    else{
        response.send("Incorrect user id or pwd")
    }

    // console.log("Inside the LoginPost")
});


module.exports = userRoutes;