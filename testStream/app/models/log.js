var mongoose = require('mongoose');

module.exports = mongoose.model('log', {
	IP : String,
	timeStamp : String
});