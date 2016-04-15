function ContactController(a, b) {
  a.name = "Bill Gates";
	b(function () {
		$scope.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject= ['$scope','$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
