function ContactController(randomWords, ofMyChoosing) {
	randomWords.name = 'Bill Gates';

	ofMyChoosing(function () {
		randomWords.name = 'Steve Jobs';
	}, 5000);
}

// inject params manually
ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);