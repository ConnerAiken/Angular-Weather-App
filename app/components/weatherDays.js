app.component('weatherDays', {
		restrict: 'E',
    templateUrl: '/app/templates/days-view.html',
		controllerAs: 'vm',
    bindings: {
        forecast: '='
    },
});
