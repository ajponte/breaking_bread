'use strict';

angular.module('feed').controller('FeedController', ['$scope',
	function($scope) {
		$scope.feedEntries  = [
			{name: "Bob", food: "hot dogs", event: "Christmas Party", date: "12-23-2015"},
			{name: "Janet", food: "hamburgers", event: "Winter BBQ", date: "12-24-2015"},
			{name: "Dave", food: "cookies", event: "Holiday Bash", date: "12-24-2015"},
			{name: "Melvin", food: "apple pie", event: "New Years Picnic", date: "1-3-2016"}
		];
	}
]);