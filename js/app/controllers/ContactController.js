function ContactController(kyoto, osaka) {
	kyoto.name = 'Bill Gates';

	osaka(function () {
		kyoto.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
