import angular from 'angular';
import subrouteTpl2 from 'app/subroute2/subroute.tpl';
import modal from 'common/components/modal';
import modalTemplate from 'app/subroute/modal.tpl';

var subRouteModule = angular.module('subroute2', [subrouteTpl2.name, modal.name, modalTemplate.name])
	.config(function($stateProvider) {
		$stateProvider.state('subroute2', {
			url: '/subroute2',
			templateUrl: subrouteTpl2.name,
			controller: 'SubRouteController',
			controllerAs: 'subRouteCtrl'
		});
	})


function SubRouteController($modal, $scope) {
	this.$modal = $modal;
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