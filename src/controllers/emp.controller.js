(function () {
	"use strict";
	angular.module("app").controller("emp", controller);
	controller.$inject = ["$location"];
	function controller($location) {
		this.name = "Geo";
		this.rename = function () {
			return (this.name = "We rename");
		};
	}
})();
