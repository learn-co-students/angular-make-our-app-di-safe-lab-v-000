function ContactController(daScope, daTimeout) {

	daScope.name = 'Bill Gates';

	daTimeout(function () {
		daScope.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);