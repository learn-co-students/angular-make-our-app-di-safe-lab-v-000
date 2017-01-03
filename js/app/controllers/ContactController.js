function ContactController(bradigan, lit) {
	bradigan.name = 'Bill Gates';

	lit(function () {
		$scope.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
