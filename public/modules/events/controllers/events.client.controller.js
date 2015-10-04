'use strict';

angular.module('events').controller('EventsController', ['$scope', '$http',
	function($scope, $http) {
		// Controller Logic
		$scope.createEvent = function() {
			var participants = $scope.participants.split(",");
			var eventData = {
				"eventName" : $scope.eventName,
				"location" : $scope.location,
				"eventDay" : $scope.eventDay,
				"theme" : $scope.theme,
				"dish" : $scope.dish,
				"maxNumMembers" : $scope.maxNumMembers,
				"participants" : participants
			};

			console.log("eventData: " + JSON.stringify(eventData));
			$scope.response = '';

			$http.post('/api/events/submitEvent', eventData).then(function(res) {
				$scope.response = res;
				//clear data
				//console.log(JSON.stringify(res)+"Stuff");

				}, 
				function(err) {
				if (err) {
					console.log("could not POST event data");
				}
				console.log("post has ended");
				
			});
				$scope.eventName='';
				$scope.location='';
				$scope.eventDay='';
				$scope.theme='';	
				$scope.dish='';
				$scope.maxNumMembers=0;
				$scope.participants='';
				$scope.submitted = true;

		};
	}
]);