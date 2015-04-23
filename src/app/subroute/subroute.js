import angular from 'angular';
import subrouteTpl from 'app/subroute/subroute.tpl';
import moment from 'moment';
// import modal from 'common/components/modal';
// import modalTemplate from 'app/subroute/modal.tpl';

var subRouteModule = angular.module('subroute', [subrouteTpl.name])
	.config(function($stateProvider) {
		$stateProvider.state('subroute', {
			url: '/subroute',
			templateUrl: subrouteTpl.name,
			controller: 'SubRouteController',
			controllerAs: 'subRouteCtrl'
		});
	})


function SubRouteController($scope) {
	this.$scope = $scope;
};
SubRouteController.prototype.showModal = function() {
	console.log("Show modal");
	var modal = this.$modal({
		scope: this.$scope,
		template: 'app/subroute/modal.tpl.html',
		show: true
	});
}

subRouteModule.controller('SubRouteController', SubRouteController);

export default subRouteModule;