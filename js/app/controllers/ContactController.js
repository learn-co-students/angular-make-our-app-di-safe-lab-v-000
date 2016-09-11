function ContactController(asdfkalsdj, idgaf) {
	asdfkalsdj.name = 'Bill Gates';

	idgaf(function () {
		asdfkalsdj.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);