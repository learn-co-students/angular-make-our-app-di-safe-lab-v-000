function ContactController(blarg, blorg) {
  
	blarg.name = 'Bill Gates';

	blorg(function () {
		blarg.name = 'Steve Jobs';
	}, 5000);

  
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);