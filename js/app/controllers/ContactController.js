function ContactController(mouthWash, breakTime) {
	mouthWash.name = 'Bill Gates';

	breakTime(function () {
		mouthWash.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout']

angular
	.module('app')
	.controller('ContactController', ContactController);
