'use strict';

angular.module('dashboard').controller('DashboardController', ['$scope','$http',
	function($scope, $http) {
		// Controller Logic

		/** Retrives the user's location. */
		$http.post('/api/dashboard/location/update', eventData).then(function(res) {
				$scope.editUserLocation = res;
				//clear data
				//console.log(JSON.stringify(res)+"Stuff");

				}, 
				function(err) {
				if (err) {
					console.log("could not POST event data");
				}
				console.log("post has ended");
				
			});
		/** Retrives the user's bio on the dashboard. */
		$http.post('/api/dashboard/bio/update', eventData).then(function(res) {
				$scope.editBio = res;
				//clear data
				//console.log(JSON.stringify(res)+"Stuff");

				}, 
				function(err) {
				if (err) {
					console.log("could not POST event data");
				}
				console.log("post has ended");
				
			});
		/** Retrives  the user's contacts list with a new contact. */
		$http.post('/api/dashboard/contacts/addContact', eventData).then(function(res) {
				$scope.addContact = res;
				//clear data
				//console.log(JSON.stringify(res)+"Stuff");

				}, 
				function(err) {
				if (err) {
					console.log("could not POST event data");
				}
				console.log("post has ended");
				
			});
		/** Retrives the user's profile pic to a new url. */

		// ...
	}
]);