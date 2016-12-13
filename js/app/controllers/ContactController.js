function ContactController(param1, param2) {
	param1.name = 'Bill Gates';

	param2(function () {
		param1.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
