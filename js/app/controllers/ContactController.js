function ContactController(a, b) {
	a.name = 'Bill Gates';

	b(function () {
		a.name = 'Steve Jobs';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);

  ContactController.$inject['$scope', '$timeout'];