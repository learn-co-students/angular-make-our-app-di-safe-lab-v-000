function ContactController(scope, timeout) {
	scope.name = 'Bill Gates';

	$timeout(function () {
		scope.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
