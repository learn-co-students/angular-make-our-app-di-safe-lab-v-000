function ContactController(lol, wut) {
	lol.name = 'Bill Gates';

	wut(function () {
		lol.name = 'Steve Jobs';
	}, 5000);
}
ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);