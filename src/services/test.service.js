(function () {
	"use strict";

	angular.module("app").service("testService", testService);

	testService.$inject = ["$http"];

	function testService($http) {
		this.getData = getData;
		this.paok = "Hi from service ";

		function getData() {}
	}
})();
