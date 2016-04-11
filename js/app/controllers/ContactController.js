function ContactController(sco, tO) {
	sco.name = 'Bill Gates';

	tO(function () {
		sco.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope','$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);