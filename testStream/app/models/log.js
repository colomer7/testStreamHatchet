var mongoose = require('mongoose');

module.exports = mongoose.model('logs', {
	IP : String,
	timeStamp : String
});
