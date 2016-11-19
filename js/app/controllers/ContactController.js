function ContactController(banana, burger) {
	banana.name = 'Bill Gates';

	burger(function () {
		banana.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
