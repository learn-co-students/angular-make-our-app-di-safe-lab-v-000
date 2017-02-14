function ContactController($apple, $orange) {
	$apple.name = 'Bill Gates';

	$orange(function () {
		$apple.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
