var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketListSchema = new Schema({
	title: {
		type: String,
		default: 'hello'
	},
	categories: {
		type: String,
		default: 'james'
	},
	content: {
		type: String,
		default: 'wasup?'
	},
	specificUser: {
		type: String,
		default: ''
	}
});

module.exports = mongoose.model('BucketList', BucketListSchema);