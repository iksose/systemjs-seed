import angular from 'angular';

var homeModule = angular.module('directives', [])

homeModule
	.directive('cards', function() {
		return {
			restrict: 'EA',
			transclude: true,
			template: '<div>Hi im cards</div><ng-transclude></ng-transclude>',
			scope: {},
			controller: function($scope) {
				console.log('cards loaded')
				$scope.cardsObj = "cards obj from parent"
			},
			link: function(scope, elem, attrs, controllerInstance) {}

		};
	})
	.directive('cardJr', function() {
		return {
			restrict: 'EA',
			transclude: true,
			template: '<div>card jr + {{wangs}}</div>',
			scope: {
				wangs: '@wangs',
			},
			controller: function($scope) {
				console.log($scope)
			},
			link: function(scope, elem, attrs, controllerInstance) {}

		};
	});

export default homeModule;