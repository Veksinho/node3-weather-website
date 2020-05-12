const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + longitude + '&lon=' + latitude + '&appid=815dc2973de9d155c9b1c203db74ad98&units=metric&lang=sr'

    request( { url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather sevice!', undefined)
        } else if (body.message) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const temp = body.main.temp
            const airPressure = body.main.pressure
            const desc = body.weather[0].description
            const minTemp = body.main.temp_min
            const maxTemp = body.main.temp_max

            callback(undefined, `Weather description in Serbian: ${desc}. It is currently ${temp} degrees out. Temperature high today is ${maxTemp} degrees, while the minimum temperature is ${minTemp} degrees. Air pressure is ${airPressure} mbar.`)
        }
    })
}

module.exports = forecast


