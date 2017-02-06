app.controller('forecastCtrl', ['$scope', 'WeatherService', '$state', '$stateParams', function($scope, WeatherService, $state, $stateParams) {
    $scope.itemsLoading = true;
    $scope.zipCode = $stateParams.zip;  
	if(!$stateParams.zip) {
		alert("You must enter a zip code.");
		return;
	}

    WeatherService.getForecast($scope.zipCode).then(function(response) {
      $scope.forecastData = response.data;
      $scope.forecastData.daily.data.splice(0, 1); 
      $scope.itemsLoading = false;
    }).catch(function(response) {
      alert("An error occured while fetching the forecast");
    });

    $scope.seeDay = function(time) {
      $state.go("forecastday", { date: time, zip: $scope.zipCode});
    };

    $scope.goBack = function() {
      $state.go('home');
    };
}]);
