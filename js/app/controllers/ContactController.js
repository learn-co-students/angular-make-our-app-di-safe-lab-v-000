function ContactController(hi,there) {

  hi.name = 'Bill Gates';

  there(function () {
    hi.name = 'Steve Jobs';
  }, 5000);

}

ContactController.$inject = [‘$scope’, ‘$timeout’];

angular
  .module('app')
  .controller('ContactController', ContactController);
