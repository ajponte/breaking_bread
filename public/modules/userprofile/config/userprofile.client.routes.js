'use strict';

//Setting up route
angular.module('userprofile').config(['$stateProvider',
	function($stateProvider) {
		// Userprofile state routing
		$stateProvider.
		state('userprofile', {
			url: '/userprofile',
			templateUrl: 'modules/userprofile/views/userprofile.client.view.html'
		});
	}
]);