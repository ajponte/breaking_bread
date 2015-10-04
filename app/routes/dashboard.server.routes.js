'use strict';

var mongoose = require('mongoose');
var DashboardEntry = mongoose.model('DashboardEntry');
var Contactable = mongoose.model('Contactable');

module.exports = function(app) {
	/** Return the user's dashboard entry. */
	app.get('/api/dashboard/getUserDashboard', function(req, res) {
		var data = req.body;
		var userId = data.userId;
		DashboardEntry.find({"user": userId}, function(err, doc) {
			if (err) {
				console.log("error getting dashboard for user " + userId);
				res.send(err);
			} else {
				res.jsonp(doc);
			}
		});
	});

	/** Updates the user's location. */
	app.post('/api/dashboard/location/update', function(req, res) {
		var data = req.body;
		var userId = data.userId;
		var location = data.location;
		var query = {'user': userId};
		DashboardEntry.update(query, {$set:{'location': location}}, function(err, doc) {
			if (err) {
				console.log("error updating location for user " + userId);
				res.send(err);
			} else {
				res.jsonp(doc);
			}
		});
	});

	/** Updates the user's bio on the dashboard. */
	app.post('/api/dashboard/bio/update', function(req, res) {
		var data = req.body;
		var userId = data.userId;
		var bio = data.bio;
		var query = {'user': userId};
		DashboardEntry.update(query, {$set:{'bio': bio}}, function(err, doc) {
			if (err) {
				console.log("error updating bio for user " + userId);
				res.send(err);
			} else {
				res.jsonp(doc);
			}
		});
	});

	/** Update the user's contacts list with a new contact. */
	app.post('/api/dashboard/contacts/addContact', function(req, res) {
		// TODO: Grab the contact's info from the users collection.
		var data = req.body;
		var userId = data.userId;
		var contactId = data.contactId;
		var query = {'user': userId};
		Contactable.update(query, {$push:{'contacts': contactId}}, function(err, doc) {
			if (err) {
				console.log('error adding contact ' + contactInfo + 'to user ' +
						    userId + ' contacts');
				console.log(err);
				res.send(err);
			} else {
				res.jsonp(doc);
			}
		});
	});

	/** Update the user's profile pic to a new url. */
	app.post('/api/dashboard/profilePic/update', function(req, res) {
		//TODO
	});
};
