function ContactController(a, b) {
	// $scope, $timeout
  // this.$inject = ['$scope', '$timeout'];
  // $scope.name = 'Bill Gates';
  a.name = 'Bill Gates';

	b(function () {
		$scope.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);