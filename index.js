var express = require('express')
var bodyParser = require('body-parser')
var ip = process.env.IP || 'localhost'
var app = express()
var WeatherManager = require('./lib/WeatherManager')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
  res.json({})
})
app.get('/weather', WeatherManager.weatherData)

app.listen(process.env.PORT || 4000, function () {
  if (ip === 'localhost' || ip[0] === '1') {
    console.log('Server running on http://' + ip + ':' + (process.env.PORT || 4000))
  } else if (ip !== 'localhost' && ip[0] !== '1') {
    console.error('Your ip address is not valid')
    process.exit(1)
  }
})
