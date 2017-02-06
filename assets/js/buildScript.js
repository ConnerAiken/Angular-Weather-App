// This uses webpack to bundle all the dependencies *see /webpack.config.js
// I am sure you know what webpack is but just incase, here is a great video: https://www.youtube.com/watch?v=9kJVYpOqcVU

// For some reason I cannot get it to work with my angular controller
require('./loader.js');
require('./../../bower_components/angular/angular.min.js');
require('./../../bower_components/angular-ui-router/release/angular-ui-router.min.js');
require('./../../bower_components/angular-cookies/angular-cookies.min.js');
require('./../../bower_components/angular-animate/angular-animate.min.js');

//require('./../../app/app.js');
require('./../../app/components/weatherDayOverview.js');
require('./../../app/components/weatherDays.js');
require('./../../app/services/WeatherService.js');
//require('./../../app/controllers/forecastCtrl.js');
//require('./../../app/controllers/forecastDayCtrl.js');
//require('./../../app/controllers/homeCtrl.js');
