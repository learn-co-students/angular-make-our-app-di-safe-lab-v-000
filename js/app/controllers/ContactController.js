function ContactController(will, smith) {
	will.name = 'Bill Gates';

	smith(function () {
		will.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
