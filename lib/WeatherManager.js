var rp = require('request-promise')
var city = ""
var API_KEY = "650e2a6cd7d34c84905105743162507"
var BASE_URL = "http://api.apixu.com/v1/current.json"

module.exports = {
  weatherData: function (req, res) {
    if (req.query.city) {
      city = req.query.city
      var FULL_URL = BASE_URL + '?key=' + API_KEY + '&q=' + city
      rp({
        method: 'GET',
        uri: FULL_URL,
        json: true
      }).then(function (data) {
        res.json({
          "city": data["location"]["name"],
          "country": data["location"]["country"],
          "icon_url": "http://" + (data["current"]["condition"]["icon"]).substr(2),
          "temperature_c": (data["current"]["temp_c"]).toString().split('.')[0],
          "temperature_f": data["current"]["temp_f"],
          "feels_like_c": (data["current"]["feelslike_c"]).toString().split('.')[0],
          "feels_like_f": data["current"]["feelslike_f"],
          "humidity": data["current"]["humidity"],
          "description": data["current"]["condition"]["text"],
          "is_day": data["current"]["is_day"]
        })
      }).catch(function (err) {
        res.json(err)
      })
    }
  },
}