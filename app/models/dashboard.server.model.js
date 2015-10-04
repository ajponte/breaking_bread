'use strict';

var mongoose = require('mongoose'),
	Schema   = mongoose.Schema;

var DashboardEntrySchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},

	bio: {
		type: String,
		default: ''
	},

	pictureUrl: {
		type: String,
		default: ''
	},

	location: {
		type: String,
		default: ''
	},

	contactables: {
		type: Schema.ObjectId,
		ref: 'Contactable'
	}
});

mongoose.model('DashboardEntry', DashboardEntrySchema);
