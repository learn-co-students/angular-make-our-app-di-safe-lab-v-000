function ContactController(sc, tm) {
	sc.name = 'Bill Gates';

	tm(function () {
		tm.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = [ '$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);