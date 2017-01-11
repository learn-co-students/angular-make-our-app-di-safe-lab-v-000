function ContactController(soap, rope) {
	soap.name = 'Bill Gates';

	rope(function () {
		soap.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);