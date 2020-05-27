const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const coursesRoutes = require('./routes/courses');
const app =  express();
const morgan = require('morgan');
app.use (morgan('combined'));
// app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false})); //QS
app.use(bodyParser.json());

app.use('/',userRoutes);
app.use('/course',coursesRoutes);

const debug = require('debug')('app');
const server = app.listen(process.env.PORT || 1234,()=>{
    console.log('Server Start........ ',server.address().port);
    debug('Server Start ',server.address().port, 'PID ',process.pid);
})