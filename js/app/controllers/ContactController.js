function ContactController(word, chose) {
	word.name = 'Bill Gates';

	chose(function () {
		word.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
