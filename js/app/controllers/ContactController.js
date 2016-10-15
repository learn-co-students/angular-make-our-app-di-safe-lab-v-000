function ContactController(abc, xyz) {
	abc.name = 'Bill Gates';

	$timeout(function () {
		xyz.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);