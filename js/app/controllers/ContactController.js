function ContactController(mango, mosquito) {
	mango.name = 'Bill Gates';

	mosquito(function () {
		mango.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];


angular
	.module('app')
	.controller('ContactController', ContactController);
