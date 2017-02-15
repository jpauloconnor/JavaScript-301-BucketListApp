var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketListSchema = new Schema({
	title: {
		type: String,
		default: ''
	},
	categories: {
		type: String,
		default: ''
	},
	content: {
		type: String,
		default: ''
	},
	specificUser: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('BucketList', BucketListSchema);