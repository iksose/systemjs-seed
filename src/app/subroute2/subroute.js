import angular from 'angular';
import subrouteTpl2 from 'app/subroute2/subroute.tpl';

var subRouteModule2 = angular.module('subroute2', [subrouteTpl2.name])
	.config(function($stateProvider) {
		$stateProvider.state('subroute2', {
			url: '/subroute2',
			templateUrl: subrouteTpl2.name,
			controller: 'SubRouteController2',
			controllerAs: 'subRouteCtrl'
		});
	})


function SubRouteController2($scope) {
	console.log("Subroute ctrl 2!", subrouteTpl2.name)
};
SubRouteController2.prototype.showModal = function() {
	console.log("Show modal");
	var modal = this.$modal({
		scope: this.$scope,
		template: 'app/subroute/modal.tpl.html',
		show: true
	});
}

subRouteModule2.controller('SubRouteController2', SubRouteController2);

export default subRouteModule2;