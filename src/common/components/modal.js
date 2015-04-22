import angular from 'angular';
import angularstrap from 'angular-strap';

var modal = angular.module('common.components.modal', ['mgcrea.ngStrap.modal']);

// modal.service("modalService", function() {
// 	function ModalService(val) {
// 		this.value = "wut m8?";
// 	}
//
// 	ModalService.prototype = {
// 		get dicks() {
// 			return "no dicks"
// 		},
// 		set dicks(val) {
// 			console.log("u wot m8?")
// 		}
// 	};
// 	return new ModalService();
// })

export default modal;