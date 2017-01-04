function ContactController(c,d) {
	c.name = 'Bill Gates';

	d(function () {
		c.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
