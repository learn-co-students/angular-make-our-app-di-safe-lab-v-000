function ContactController(deez, nutz) {
  deez.name = 'Bill Gates';
  nutz(function () {
		deez.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject=['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);