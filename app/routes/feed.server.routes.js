'use strict';

var mongoose = require('mongoose');
var FeedEntry = mongoose.model('FeedEntry');

module.exports = function(app) {
	app.get('api/feed/getFeedEntries', function(req, res) {
		FeedEntry.find({}, function(err, doc) {
			if (err) {
				console.log("error getting event.");
			} else {
				res.jsonp(doc);
			}
		})
	})

	app.post('api/feed/removeFeedEntry', function(req, res) {
		var data = req.body();

		FeedEntry.remove({"_id": data.feedEntry.id}, function (err) {
			if (err){
				console.log("error removing feed entry");
			}
		})
	})
}

