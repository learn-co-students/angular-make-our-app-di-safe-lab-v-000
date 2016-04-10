function ContactController(whatev, dontmatta) {
	whatev.name = 'Bill Gates';

	dontmatta(function () {
		whatev.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);