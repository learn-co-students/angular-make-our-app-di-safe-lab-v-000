function ContactController(durr, blah) {
	durr.name = 'Bill Gates';

	blah(function () {
		durr.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);