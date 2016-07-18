function ContactController(whatever, kunki) {
	whatever.name = 'Bill Gates';

	kunki(function () {
		whatever.name = 'Steve Jobs';
	}, 5000);
}
ContactController.$inject =['$scope', '$timeout'];
angular
	.module('app')
	.controller('ContactController', ContactController);