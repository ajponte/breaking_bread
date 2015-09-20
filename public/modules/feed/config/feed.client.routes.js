'use strict';

//Setting up route
angular.module('feed').config(['$stateProvider',
	function($stateProvider) {
		// Feed state routing
		$stateProvider.
		state('feed', {
			url: '/feed',
			templateUrl: 'modules/feed/views/feed.client.view.html'
		});
	}
]);