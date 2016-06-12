function ContactController(contact, time) {
	contact.name = 'Bill Gates';

	time(function () {
		contact.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
