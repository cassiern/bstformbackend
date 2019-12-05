const express = require('express');
const app = express();
require('./db/db');
const bodyParser = require('body-parser');
const cors = require('cors');



const postsController = require('./controllers/posts.js');
const usersController = require('./controllers/users.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
//allowing my react to talk to my server


//url path to controllers
app.use('/posts', postsController);
app.use('/user', usersController);


//connected to port 9000
app.listen(9000, () => {
	console.log('listening on port 9000');
})
