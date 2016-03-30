function ContactController(random, word) {
	random.name = 'Bill Gates';

	word(function () {
		word.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);