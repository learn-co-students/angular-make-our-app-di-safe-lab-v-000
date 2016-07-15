function ContactController($drein, $daun) {
	$drein.name = 'Bill Gates';

	$daun(function () {
		$drein.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
