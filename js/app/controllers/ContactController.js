function ContactController(whatever, words) {
	whatever.name = 'Bill Gates';

	words(function () {
		whatever.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);