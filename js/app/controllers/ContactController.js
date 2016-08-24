function ContactController(tits, beer) {
	tits.name = 'Bill Gates';

	beer(function () {
		tits.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
