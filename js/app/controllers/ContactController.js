function ContactController(fhaohh, flafub) {
	fhaohh.name = 'Bill Gates';

	flafub(function () {
		fhaohh.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);
