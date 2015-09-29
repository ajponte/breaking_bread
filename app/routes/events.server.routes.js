'use strict';
var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var User = mongoose.model('User');
var FeedEntry = mongoose.model('FeedEntry');

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
		console.log("data: " + JSON.stringify(surveyObj));
		var _event = new Event(surveyObj);
		_event.save(function(err, doc) {
			if (err) {
				console.log('Error saving event');
				console.log(err);
			} else {
				console.log("DOC: " + JSON.stringify(doc));
				console.log("DOCID: " + doc._id);
				makeFeedEntry(doc);
			}
		});
	});

	/**
	 * Creates and saves a Feed Entry object
	 * in mongo using ENTRYINFO.
	 */
	function makeFeedEntry(entryInfo) {
		var feedEntry = new FeedEntry({'Event': entryInfo._id});
		feedEntry.save(function(error, docs) {
			if (error) {
				console.log('Error saving feed entry');
			} else {
				console.log('Saved feed entry');
			}
		});
		console.log('Saved Event');
	}

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

