app.controller('homeCtrl', ['$scope', '$state', '$cookies', '$timeout', function($scope, $state, $cookies, $timeout) {
  var vm = this;
  vm.zipCode = vm.zipCode || $cookies.get('zipcode');

  vm.submitRequest = function() {
  	if(!vm.zipCode) {
  		alert("You must enter a zip code.");
  		return;
  	}

    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 7);

    $cookies.put('zipcode', vm.zipCode, {'expires': expireDate});
    $state.go("forecast", { zip: vm.zipCode });
  };
}]);
