function ContactController(tacos, burritos) {
	tacos.name = 'Bill Gates';

	burritos(function () {
		tacos.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);