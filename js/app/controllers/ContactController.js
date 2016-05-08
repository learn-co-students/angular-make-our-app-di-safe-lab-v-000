function ContactController(rando, to) {
	rando.name = 'Bill Gates';

	to(function () {
		$rando.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];


angular
	.module('app')
	.controller('ContactController', ContactController);
