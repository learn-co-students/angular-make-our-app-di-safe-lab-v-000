function ContactController(p, t) {
	p.name = 'Bill Gates';

	t(function () {
		p.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
