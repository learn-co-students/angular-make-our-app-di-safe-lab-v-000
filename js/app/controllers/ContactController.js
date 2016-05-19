function ContactController(deez, nutz) {
	var deez = $scope.name = 'Bill Gates';

	var nutz = $timeout(function () {
		$scope.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject=['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);