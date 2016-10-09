function ContactController(scoped, timeouted) {
	scoped.name = 'Bill Gates';

	timeouted(function () {
		scoped.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);