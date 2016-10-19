function ContactController(here, there) {
	here.name = 'Bill Gates';

	there(function () {
		here.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
