function ContactController(thingOne, thingTwo) {
	thingOne.name = 'Bill Gates';

	thingTwo(function () {
		thingOne.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);