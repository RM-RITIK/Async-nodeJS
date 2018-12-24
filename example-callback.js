var request = require('request');
var url = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

request({
    url: url,
    json: true
}, function(error, response, body) {
    if(error) {
        console.log('Unable to fetch the weather!');
    }
    else {
        console.log('It\'s ' + body.main.temp + ' in ' + body.name + '.');
    }
    
});
console.log('After request!') 