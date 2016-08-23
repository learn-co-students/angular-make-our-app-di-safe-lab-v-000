function ContactController(monkey, ape) {

	// monkey === $scope;
	// ape === $timeout;
	
	monkey.name = 'Bill Gates';

	ape(function () {
		monkey.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope','$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
