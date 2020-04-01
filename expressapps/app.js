const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/courses');
const app = express();
const morgan = require('morgan');
app.use(morgan ('tiny'))
// app.use(morgan ('combined'))
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false})); //QS
app.use(bodyParser.json());
app.use('/', userRoutes);
app.use('/course',courseRoutes);

// app.get('/register/:userid',(req, res)=>{
//     res.send('user id is '+req.params.userid)
// })

// app.get('/profile',(req, res)=>{
//     res.send('user id is '+req.query.userid)
// })

// app.get('/login',(request,response)=>{
//     console.log("request GET is ",request.query);
//     response.send("Welcome User");

// })
// app.post('/login',(request,response)=>{
//     console.log("request body ",request.body);
//     var userObject = request.body;
//     if(userObject.userid == userObject.pwd){
        
//         response.send('Welcome User '+userObject.userid);
//     }
//     else{
//         response.send('Invalid user id or password');
//         }
    
//     // console.log("inside the login post ");
// })

// console.log("App is ",typeof app, '   ',app);
const debug = require('debug')('app');
const server = app.listen(process.env.PORT || 1234, ()=>{
    console.log('server start....',server.address().port);
    debug('server start ',server.address().port, 'PID' ,process.pid);
})