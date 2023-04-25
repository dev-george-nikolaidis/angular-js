var app = angular.module("app", ["ui.router"]).run([
	"$rootScope",
	function ($rootScope) {
		$rootScope.person = "Hi from the rootScope";
	},
]);

// (function () {
// 	"use strict";

// 	angular.module("app").controller("directive", directiveController);
// 	directiveController.$inject = ["$scope", "$rootScope"];

// 	function directiveController($scope, $rootScope) {
// 		this.test = "heo" + "" + $rootScope.person;
// 		this.fun = function () {
// 			return "EEEEEEEEEEEEEEEEEEEEEEEEE";
// 		};
// 	}
// })();
