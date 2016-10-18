function ContactController(blah, yikes) {
	blah.name = 'Bill Gates';

	yikes(function () {
		blah.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
