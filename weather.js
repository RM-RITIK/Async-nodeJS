var request = require('request');
module.exports = function(location, callback) {
    var encodedLocation = encodeURIComponent(location);
    var url = 'samples.openweathermap.org/data/2.5/weather?q=' + encodedLocation +'&appid=b6907d289e10d714a6e88b30761fae22';
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