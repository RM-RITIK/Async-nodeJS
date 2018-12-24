var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function(callback) {
    request({
        url: url,
        json: true
    }, function(error, respone, body) {
        if(error) {
            callback();
        }
        else {
            callback(body);
        }
    })
}
