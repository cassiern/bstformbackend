const express = require('express');
const app = express();
require('./db/db');
const bodyParser = require('body-parser');




const postsController = require('./controllers/posts.js');
const usersController = require('./controllers/users.js');

app.use(bodyParser.urlencoded({extended: false}))


//url path to controllers
app.use('/', postsController);
app.use('/user', usersController);


//connected to port 9000
app.listen(9000, () => {
	console.log('listening on port 9000');
})
