function ContactController(what, that) {
	what.name = 'Bill Gates';

	that(function () {
		what.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);