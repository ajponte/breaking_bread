'use strict';
var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var User = mongoose.model('User');
var FeedEntry = mongoose.model('FeedEntry');

module.exports = function(app) {
	app.post('api/events/submitEvent', function(req, res) {
		var data = req.body;
		var surveyObj = {};
		var _event = new Event(surveyObj);
		_event.save(data, function(err, doc) {
			if (err) {
				console.log('Error saving event');
			} else {
				FeedEntry.save({"eventEntry": doc._id}, function(err, docs) {
					if (err) {
						console.log('Error saving event to feed.');
						console.log(err);
					} else {
						console.log('Saved event to feed')
					}
				});
				console.log('Saved Event');
			}
		});
	});

	/**
	 * Returns all events for the user.
	 */
	app.post('/api/events/getEventsForUser', function(req, res) {
		var data = req.body;
		Event.find({"user": data.user}, function(err, doc) {
			if (err) {
				console.log("error getting event.");
			} else {
				res.jsonp(doc);
			}
		});
	});
};

