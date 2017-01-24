function ContactController(merp, derp) {
	merp.name = 'Bill Gates';

	derp(function () {
		merp.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ["$scope", "$timeout"]

angular
	.module('app')
	.controller('ContactController', ContactController);
