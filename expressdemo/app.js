const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const coursesRoutes = require('./routes/courses');
const session = require('express-session')
const app =  express();
const morgan = require('morgan');
app.use (morgan('combined'));
// app.use(morgan('tiny'));
app.use(express.static('public'));

//configure of Session
app.use(session({
    secret:'mysecretkey',
    resave:false, //session will not save for each request, only when there is some cahnges
    saveUninitialized:false, //no session value save for blank things
    expires:5*60*1000,
    cookie:{
        secure:false, //http, true(https)
        maxAge:60*1000,
    }
}));
app.use(bodyParser.urlencoded({extended:false})); //QS
app.use(bodyParser.json());
app.set('view engine','ejs');

app.use('/',userRoutes);
app.use('/course',coursesRoutes);
app.use(require('./middlewares/error'));

const debug = require('debug')('app');
const server = app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start........ ',server.address().port);
    debug('Server Start ',server.address().port, 'PID ',process.pid);
})