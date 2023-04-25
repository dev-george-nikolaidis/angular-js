(function () {
	"use strict";

	angular.module("app").controller("test", testController);

	testController.$inject = ["$scope", "$rootScope", "testService"];

	function testController($scope, $rootScope, testService) {
		console.log("testController called");
		$scope.test = "My new  " + $rootScope.person;
		$scope.inputValue = "";
		$scope.service = testService.paok;
		$scope.rename = function () {};
		$scope.count = function (value1, value2) {
			return value1 + value2;
		};
	}
})();
