'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Event = mongoose.model('Event'),
	User = mongoose.model('User');

// Globals
var user1, event1;

describe('Event Model Unit Tests', function() {
	before(function(done) {
		user1 = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			provider: 'local'
		});

		event1 = new Event({
			user: user1,
			name: 'test event1',
			location: 'test location1',
			eventType: 'potluck'
		});

	done();

	});

	describe('Method Save', function () {
		it('should begin with no events', function(done) {
			Event.find({}, function(err, events) {
				events.should.have.length(0);
				done();
			});
		});

		it('should be able to save without problems', function(done) {
			event1.save(done);
		});
	});
    
    after(function(done) { 
		Event.remove().exec();
		User.remove().exec();
		
		done();
	});
});
