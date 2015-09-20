'use strict';
var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var User = mongoose.model('User');

module.exports = function(app) {
	app.post('/api/events/submitEvent', function(req, res) {
		var data = req.body;
		var surveyObj = {
			"location" : data.location,
			"name" : data.eventName,
			"theme": data.theme,
			"dish": data.dish,
			"maxNumMebers": data.maxNumMebers,
			"participants": data.participants,
			"eventDay": data.eventDay
		};
		console.log("data in routes file: " + JSON.stringify(data));
		var _event = new Event(surveyObj);
		_event.save(function(err, doc) {
			if (err) {
				console.log('Error saving event');
				console.log(err);
				res.jsonp(err);
			} else {
				console.log('Saved Event');
				res.jsonp(doc);
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

