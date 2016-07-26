function ContactController(hiddle, pupp) {
	hiddle.name = 'Bill Gates';

	pupp(function () {
		hiddle.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);