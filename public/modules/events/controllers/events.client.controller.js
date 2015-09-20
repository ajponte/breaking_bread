'use strict';

angular.module('events').controller('EventsController', ['$scope', '$http',
	function($scope, $http) {
		// Controller Logic
		// 
		$scope.createEvent = function() {
			var participants = $scope.participants.split(",");
			var eventData = {
				"eventName" : $scope.eventName,
				"location" : $scope.location,
				"eventDay" : $scope.eventDay,
				"theme" : $scope.theme,
				"dish" : $scope.dish,
				"maxNumMebers" : $scope.maxNumMebers,
				"participants" : participants
			};
			console.log("eventData: " + JSON.stringify(eventData));
			$scope.respone = '';
			$http.post('/api/events/submitEvent', eventData).then(function(res) {
				$scope.response = res;
			}, function(err) {
				if (err) {
					console.log("could not POST event data");
				}
			});
		};
	}
]);