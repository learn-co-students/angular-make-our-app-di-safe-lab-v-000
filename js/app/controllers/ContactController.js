function ContactController(s, t) {
	s.name = 'Bill Gates';

	t(function () {
		s.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
