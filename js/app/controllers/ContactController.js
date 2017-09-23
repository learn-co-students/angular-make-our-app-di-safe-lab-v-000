function ContactController(a, b) {
	a.name = 'Bill Gates';

	b(function () {
		a.name = 'Steve Jobs';
	}, 5000);
}

// when using dependency injection anotation, the property has to be outside the controller function
ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
