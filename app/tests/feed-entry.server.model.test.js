'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
    Event = mongoose.model('Event'),
	FeedEntry = mongoose.model('FeedEntry');

/**
 * Globals
 */
var user, event, feedEntry;

/**
 * Unit tests
 */
describe('Feed entry Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

        event = new Event({
			user: user,
			name: 'test event1',
			location: 'test location1',
			eventType: 'potluck'
		});
        
        event.save(function(err){
            should.not.exist(err);
        })
        
		user.save(function() { 
			feedEntry = new FeedEntry({
				event: event
			});

			done();
		});
	});

	describe('Method Save', function() {
        it('should begin with no feed entries', function(done) {
			FeedEntry.find({},function(err, feedEntrys) {
				feedEntrys.should.have.length(0)
                done();
			})
		})
        
		it('should be able to save without problems', function(done) {
			return feedEntry.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		FeedEntry.remove().exec();
        Event.remove().exec();
		User.remove().exec();
		
		done();
	});
});