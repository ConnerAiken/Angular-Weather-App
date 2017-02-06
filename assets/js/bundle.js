/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

app.component('weatherDayOverview', {
	  restrict: 'E',
    templateUrl: '/templates/day-view.html',
    controller: 'forecastDayCtrl',  /* This /w the RouteProvider is causing it to instantiate twice */
    /* bindings: {
      'data': '<'
    }  Move to bindings to avoid double controller instantiation? */
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

app.component('weatherDays', {
	  restrict: 'E',
    templateUrl: '/templates/days-view.html',
    controller: 'forecastCtrl', /* This /w the RouteProvider is causing it to instantiate twice */
    /* bindings: {
      'data': '<'
    }  Move to bindings to avoid double controller instantiation? */
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

app.factory('WeatherService', function($http) {
  return {
    getFiveDay: function(zipcode) {
        return $http({method: 'GET', url: '/api/php/fiveDayForecast', params: {zip: zipcode}});
    },
    getOneDay: function(zipcode, date) {
        return $http({method: 'GET', url: '/api/php/oneDayForecast', params: {zip: zipcode, date: date}});
    }
  };
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// This uses webpack to bundle all the dependencies *see /webpack.config.js
// I am sure you know what webpack is but just incase, here is a great video: https://www.youtube.com/watch?v=9kJVYpOqcVU

// For some reason I cannot get it to work with my angular controller
// require('./loader.js');
// require('./../../bower_components/angular/angular.min.js');
// require('./../../bower_components/angular-ui-router/release/angular-ui-router.min.js');
// require('./../../bower_components/angular-cookies/angular-cookies.min.js');
// require('./../../bower_components/angular-animate/angular-animate.min.js');

//require('./../../app/app.js');
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
//require('./../../app/controllers/forecastCtrl.js');
//require('./../../app/controllers/forecastDayCtrl.js');
//require('./../../app/controllers/homeCtrl.js');


/***/ })
/******/ ]);