function ContactController(randomWords, ofYourChoosing) {
	randomWords.name = 'Bill Gates';

	ofYourChoosing(function () {
		randomWords.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);