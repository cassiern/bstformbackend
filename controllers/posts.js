const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

//get route

router.get('/', async (req, res) => {
	console.log('get route')
	try{
		const allPosts = await Post.find();
		res.json({
			status: {
				code: 200,
				message: 'Success'
			},
			data: allPosts
		})

	}catch(err){
		console.log(err, '<-- error in GET route');
		res.send(err);
	}
})


//create route
router.post('/', async (req, res) => {
	try{

		console.log(req.body, '<-- req.body');
		const createdPost = await Post.create(req.body);
		console.log('waiting for body to be created');
		res.json({
			status: {
				code: 201,
				message: "Post successfully created"
			},
			data: createdPost
		})

	}catch(err){
		console.log(err);
		res.send(err);
	}
})

//show route


//update/edit route


//delete route




module.exports = router;