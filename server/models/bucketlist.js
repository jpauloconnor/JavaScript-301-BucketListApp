var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketListSchema = new Schema({
	todo: {
		type: String,
		default: ''
	},
	specificUser: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('BucketList', BucketListSchema);