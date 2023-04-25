(function () {
	angular.module("app").config([
		"$stateProvider",

		function ($stateProvider) {
			$stateProvider
				.state("home", {
					url: "/home",
					templateUrl: "./app.html",
				})
				.state("test", {
					url: "/test",
					templateUrl: "./src/views/test.view.html",
					// controller: "itemDetailCtrl",
				});
		},
	]);
})();
