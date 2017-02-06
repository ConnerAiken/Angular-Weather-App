app.controller('forecastCtrl', ['$scope', 'WeatherService', '$state', '$stateParams', function($scope, WeatherService, $state, $stateParams) {
    var vm = this;
    vm.itemsLoading = true;
    vm.zipCode = $stateParams.zip;

  	if(!$stateParams.zip) {
  		alert("You must enter a zip code.");
  		return;
  	}

    WeatherService.getForecast(vm.zipCode).then(function(response) {
      vm.forecastData = response.data;
      vm.forecastData.daily.data.splice(0, 1);
      vm.itemsLoading = false;
    }).catch(function(response) {
      alert("An error occured while fetching the forecast, is the api running? Try running 'node api/index.js' in the root folder.");
    });

    vm.seeDay = function(time) {
      $state.go("forecastday", { date: time, zip: vm.zipCode});
    };

    vm.goBack = function() {
      $state.go('home');
    };
}]);
