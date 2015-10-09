
'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var FeedEntrySchema = new Schema({
	Event: {
		type: Schema.ObjectId,
		ref: 'Event'
	}
});

mongoose.model('FeedEntry',FeedEntrySchema);
