function ContactController(Arsenal, ManUnited) {
	Arsenal.name = 'Bill Gates';

	ManUnited(function () {
		Arsenal.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);