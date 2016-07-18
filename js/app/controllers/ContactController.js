function ContactController(x, y) {
	x.name = 'Bill Gates';

	y(function () {
		x.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
