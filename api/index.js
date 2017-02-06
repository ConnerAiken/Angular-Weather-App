function apiService() { 

		var express = require('express');
		var app = express();
		var cors = require('cors'); 
		var https = require('https');
		app.use(cors());

		app.get('/forecast', function(req, res) {
			https.get({
						host: 'maps.googleapis.com',
						path: '/maps/api/geocode/json?address='+req.query.zip+'&sensor=false'
					}, function(response) {
						var body = '';
						response.on('data', function(d) {
							body += d;
						});
						response.on('end', function() {
							var jsonObj = JSON.parse(body);
							location = {};
							location.lat = jsonObj.results[0].geometry.location.lat;
							location.lng = jsonObj.results[0].geometry.location.lng;
							/* ========================================================
							Nested HTTPS request
							*/
									return https.get({
										host: 'api.darksky.net',
										path: '/forecast/8b7ad9737b0b32761e525e81b290f71b/'+location.lat+','+location.lng
									}, function(response) {
										var body = '';
										response.on('data', function(d) {
											console.log(d);
											body += d;
										});
										response.on('end', function() {
											var temp = JSON.parse(body);
											res.send(temp);
										});
									});
								});
							/* ======================================================== */
						});
			});

		app.listen(3000, function () {
			console.log("Api is listening on port 3000!");
		});
		 
}

module.exports = apiService;