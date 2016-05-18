function ContactController(words, choosing) {
  
	words.name = 'Bill Gates';

	choosing(function () {
		words.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
