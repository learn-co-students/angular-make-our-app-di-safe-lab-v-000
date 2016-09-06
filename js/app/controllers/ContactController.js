function ContactController(c, time) {
	c.name = 'Bill Gates';

	time(function () {
		c.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);