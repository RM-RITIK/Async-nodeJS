
var request = require('request');
/*function doWork(callback,data) {
    callback('done');
}
function doWorkPromise(data) {
    return new Promise(function(resolve, reject) {
        resolve('everything is fine');
        reject({
            error: 'something bad has happened!'
        });
    })

    
}

doWorkPromise('someData').then(function(data) {
    console.log(data);
}, function(error) {
    console.log(error);
})*/
function getWeather(location) {
    return new Promise (function(resolve,reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = 'samples.openweathermap.org/data/2.5/weather?q=' + encodedLocation +'&appid=b6907d289e10d714a6e88b30761fae22';
        if(!location) {
            return reject('No location provided!')
        }
        request({
            url: url,
            json: true
        }, function(error, response, body) {
            if(error) {
                reject('Unable to fetch the weather!');
            }
            else {
                resolve('It\'s ' + body.main.temp + ' in ' + body.name + '.');
            }
            
        })
    })
 
}
getWeather('London').then(function(currentWeather) {
    console.log(currentWeather);
}, function(error) {
    console.log(error)
});


