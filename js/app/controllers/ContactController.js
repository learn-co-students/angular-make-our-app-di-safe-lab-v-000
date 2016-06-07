function ContactController(meep, moop) {
	meep.name = 'Bill Gates';

	moop(function () {
		meep.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);