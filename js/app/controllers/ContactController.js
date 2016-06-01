function ContactController(skope, tymeout) {
	skope.name = 'Bill Gates';

	tymeout(function () {
		skope.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
