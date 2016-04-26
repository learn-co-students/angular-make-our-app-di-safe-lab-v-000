function ContactController(hee, haw) {

	hee.name = 'Bill Gates';

	haw(function () {
		hee.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];


angular
	.module('app')
	.controller('ContactController', ContactController);