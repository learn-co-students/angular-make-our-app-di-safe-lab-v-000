function ContactController(turkey, dinner) {
	turkey.name = 'Bill Gates';

  dinner(function () {
		turkey.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);