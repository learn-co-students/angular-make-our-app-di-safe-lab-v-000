function ContactController(kerry, kevin) {
	kerry.name = 'Bill Gates';

	kevin(function () {
		kerry.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);