import angular from 'angular';
import 'assets/themes/bootstrap.css!';
import router from 'oclazyload-systemjs-router';
import futureRoutes from 'app/routes.json!';

var appModule = angular.module('app', []);

appModule.config(router(appModule, futureRoutes));

appModule.config(function($locationProvider, $httpProvider, $urlRouterProvider) {
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false
	});
	$httpProvider.useApplyAsync(true);
	return $urlRouterProvider.otherwise('/');
});

appModule.run(function($rootScope, $state, $stateParams) {
	$rootScope
		.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			// console.log("start");
			// $("#ui-view").html("");
			// $(".page-loading").removeClass("hidden");
		});
	$rootScope
		.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			// console.log("end")
			// $(".page-loading").addClass("hidden");
		});
})

angular.element(document).ready(function() {
	var placeholder = document.getElementsByTagName("body")
	angular.element(placeholder).removeClass('loading');
	return angular.bootstrap(document.body, [appModule.name], {
		strictDi: false
	});
});

export default appModule;