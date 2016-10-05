function ContactController(derp, burp) {
	derp.name = 'Bill Gates';

	burp(function () {
		derp.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ["$scope", "$timeout"];

angular
	.module('app')
	.controller('ContactController', ContactController);
