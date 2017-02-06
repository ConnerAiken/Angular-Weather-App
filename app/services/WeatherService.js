app.factory('WeatherService', function($http) {
  return {
    getForecast: function(zipcode) {
        return $http({method: 'GET', url: 'http://localhost:3000/forecast', params: {zip: zipcode}});
    },
  };
});
