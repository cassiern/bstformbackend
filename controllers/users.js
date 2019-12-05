const express = require('express');
const router = express.Router();
const User = require('../models/users');


//create route

router.post('/', async(req, res) => {
	try{
		console.log(req.body, '<-- this is the req.body');

	}catch(err){

	}
})


//show route


//update/edit route


//delete route


module.exports = router;