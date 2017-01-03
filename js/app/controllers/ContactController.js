function ContactController(bradigan, lit) {
	bradigan.name = 'Bill Gates';

	lit(function () {
		bradigan.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
