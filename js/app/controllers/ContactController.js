function ContactController(random, word) {
	$scope.name = 'Bill Gates';

	$timeout(function () {
		$timeout.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);