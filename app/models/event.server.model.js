'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var EventSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},

	created: {
		type: Date,
		default: Date.now
	},

	name: {
		type: String,
		required: 'Event name is required'
	},

	location: {
		type: String,
		required: 'Event location is required'
	},

	eventType: {
		type: String,
		default: 'potluck',
		//required: 'Event Type is required'
	},

	participants: {
		/** The array will be of references to users. */
		type: Array
	},
	eventDay: {
		
		type: Date
	},
	theme: {
		
		type: String
	},
	maxNumMembers: {
		type: Number
	},
	eventRating:{
		default: 0,
		type: Number
	},
	dish : {
		type: String
	}

});

mongoose.model('Event', EventSchema);
