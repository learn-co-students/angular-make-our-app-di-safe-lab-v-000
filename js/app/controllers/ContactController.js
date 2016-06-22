function ContactController(random, shit) {
	random.name = 'Bill Gates';

	shit(function () {
		random.name = 'Steve Jobs';
	}, 5000);
};

ContactController.$inject = ['$scope','$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
