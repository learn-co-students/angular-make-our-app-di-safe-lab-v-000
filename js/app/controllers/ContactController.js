function ContactController(lol, ha) {
  
	lol.name = 'Bill Gates';

	ha(function () {
		lol.name = 'Steve Jobs';
	}, 5000);
}
ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);