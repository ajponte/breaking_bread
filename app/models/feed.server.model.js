'use strict';

var mongoose = require('mongoose'),
	Scheme = mongoose.Scheme;

var FeedEntrySchema = new Scheme({
	Event: {
		type: Schema.ObjectId,
		ref: 'Event'
	}
});

mongoose.model('FeedEntry',FeedEntrySchema);