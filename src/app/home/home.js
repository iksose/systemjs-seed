import angular from 'angular';
import homeTpl from 'app/home/home.tpl';
import cardDirective from 'app/home/directives/cards';

var adminModule = angular.module('home', [homeTpl.name, cardDirective.name])
	.config(function($stateProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: homeTpl.name,
			controller: 'HomeController',
			controllerAs: 'homeCtrl'
		});
	})

class HomeController {
	/*@ngInject*/
	constructor() {
		console.log('home!');
	}
}

adminModule.controller('HomeController', HomeController);

export default adminModule;