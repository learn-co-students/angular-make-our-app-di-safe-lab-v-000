function ContactController(whatever, yessir) {
  whatever === $scope
  yessir === $timeout 

	whatever.name = 'Bill Gates';

	$timeout(function () {
		whatever.name = 'Steve Jobs';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);

ContactController.$inject = ['$scope', '$timeout']