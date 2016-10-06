function ContactController(person, change) {
	person.name = 'Bill Gates';

	change(function () {
		person.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];
angular
	.module('app')
	.controller('ContactController', ContactController);
