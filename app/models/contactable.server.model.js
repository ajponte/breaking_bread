'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ContactableSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},

	contacts: {
		type: Array
	}
});

mongoose.model('Contactable', ContactableSchema);
