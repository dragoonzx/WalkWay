var express = require('express')
var fs = require('fs')
var http = require('http')
var https = require('https')

var app = express()

var privateKey = fs.readFileSync('keys/atelie72.key', 'utf8')
var certificate = fs.readFileSync('keys/atelie72.crt', 'utf8')

var port = 8080
var sport = 4430

var privateKey = fs.readFileSync('keys/atelie72.key', 'utf8')
var certificate = fs.readFileSync('keys/atelie72.crt', 'utf8')

var credentials = { key: privateKey, cert: certificate }

var httpServer = http.createServer(app)
var httpsServer = https.createServer(credentials, app)

app.use(express.static(__dirname + '/build'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

httpServer.listen(port, () => console.log('server is listening'))
httpsServer.listen(sport, () => console.log('server is listening safely'))
