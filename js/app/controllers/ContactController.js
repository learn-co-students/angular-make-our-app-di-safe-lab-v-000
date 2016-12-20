function ContactController(sc, to) {
	sc.name = 'Bill Gates';

	to(function () {
		sc.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
