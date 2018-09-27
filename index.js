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
app.post('/test', function (req, res) {
  res.status(200).send('{"value": true}')
})

app.listen(process.env.PORT || 4000, function () {
  console.log('Server Running')
})
