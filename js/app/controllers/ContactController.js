function ContactController(sea, salt) {
	sea.name = 'Bill Gates';

	salt(function () {
		sea.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);