const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a0ee39ea781700d835af89f133af612c&query=' +  longitude + ',' +  latitude + '&units=m'

    request({ url, json: true}, ( error, { body } = {}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find the location, please pass correct coordinates', undefined)
        } else {
            callback(undefined, 'Temperature is currently ' + body.current.temperature + ' C and feelslike ' + body.current.feelslike + ' C')
        }
    })
}


module.exports = forecast

