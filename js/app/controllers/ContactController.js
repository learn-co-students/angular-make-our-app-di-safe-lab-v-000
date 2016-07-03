function ContactController(whatever, weWant) {
	whatever.name = 'Bill Gates';

	weWant(function () {
		whatever.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
