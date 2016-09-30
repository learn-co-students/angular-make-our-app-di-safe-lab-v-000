function ContactController(flap, jack) {
	flap.name = 'Bill Gates';

	jack(function () {
		flap.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);