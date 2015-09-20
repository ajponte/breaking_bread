'use strict';

var should = require('should'),
	mongoose = require('mongoose'),
	FeedEntry = mongoose.models('FeedEntry');
	Event = mongoose.models('Event'),
	User = mongoose.models('User');

var user1, user2
var event1, event2;
var feedEntry1, feedEntry2;

describe('FeedEntry Model Unit Tests', function() {
	before(function(done) {
		user1 = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'tester1@test.com',
			username: 'username1',
			password: 'password1',
			provider: 'local'
		});

		user2 = new User({
			firstName: 'Other',
			lastName: 'Name',
			displayName: 'Other Name',
			email: 'tester2@test.com',
			username: 'username2',
			password: 'password2',
			provider: 'local'
		});

		event1 = new Event({
			user: user1,
			name: 'test event1',
			location: 'test location1',
			eventType: 'potluck'
		});

		event2 = new Event({
			user: user2,
			name: 'test event2',
			location: 'test location2',
			eventType: 'potluck'
		});

		feedEntry1 = new FeedEntry({
			event: event1
		})

		feedEntry2 = new FeedEntry({
			event: event2
		})

		done();
	})

	describe('Method Get FeedEntries' , function() {
		it('should begin with no feed entries', function(done) {
			FeedEntry.find({},function(done) {
				feedEntrys.should.have.length(0)
			})
		})

		//test feed entry addition
		it('should save a new feed entry', function(done) {

		})

		it('should have two feed entries', function(done) {
			//add feed entries somehow
			FeedEntry.find({},function(done) {
				feedEntrys.should.have.length(2)
			})
		})	
	})
})