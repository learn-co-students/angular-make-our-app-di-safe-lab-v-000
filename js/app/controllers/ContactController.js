function ContactController(dog, cat) {
	dog.name = 'Bill Gates';

	cat(function () {
		dog.name = 'Steve Jobs';
	}, 5000);
}
ContactController.$inject = ['$scope', '$timeout'];
angular
	.module('app')
	.controller('ContactController', ContactController);
