function ContactController(scalp, tenuto) {
	scalp.name = 'Bill Gates';

	tenuto(function () {
		scalp.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);