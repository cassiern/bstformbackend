const mongoose = require('mongoose');
const saltRounds = 10;
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
	isLogged: Boolean
});


module.exports = mongoose.model('User', UserSchema);


