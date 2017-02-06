app.controller('homeCtrl', ['$scope', '$state', '$cookies', '$timeout', function($scope, $state, $cookies, $timeout) {
  $scope.zipCode = $scope.zipCode || $cookies.get('zipcode');

  $scope.submitRequest = function() {
	if(!$scope.zipCode) {
		alert("You must enter a zip code.");
		return;
	}
	
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 7);

    $cookies.put('zipcode', $scope.zipCode, {'expires': expireDate});
    $state.go("forecast", { zip: $scope.zipCode });
  };
}]);
