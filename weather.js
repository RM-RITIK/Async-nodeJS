var request = require('request');
module.exports = function(location, callback) {
    var encodedLocation = encodeURIComponent(location);
    var url = 'api.openweathermap.org/data/2.5/weather?q=' + encodedLocation;
    if(!location) {
        return callback('No location provided!')
    }
    request({
        url: url,
        json: true
    }, function(error, response, body) {
        if(error) {
            callback('Unable to fetch the weather!');
        }
        else {
            callback('It\'s ' + body.main.temp + ' in ' + body.name + '.');
        }
        
    });
}