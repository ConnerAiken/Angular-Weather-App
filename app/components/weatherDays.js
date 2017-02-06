app.component('weatherDays', {
	  restrict: 'E',
    templateUrl: 'app/templates/days-view.html',
    controller: 'forecastCtrl', /* This /w the RouteProvider is causing it to instantiate twice */
    /* I normally do controllerAs: 'vm' syntax as well */
});
