// import library
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// import route
import route from './route'

const app = express()

/*
 * Izinkan CORS
 * apa itu CORS?
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 */
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
})

// set bodyParser sebagai middleware yang akan memparsing body request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// set static path untuk static file seperti image, CSS file, JS file
app.use(express.static(path.join(__dirname, 'public')))

// connect ke database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todo-app-mern-stack', {
  useNewUrlParser: true
})

// set route
app.use('/api', route)

app.get('/', (request, response) => {
  return response.end('API Working')
})

// jika route tidak ditemukan
app.use((request, response, next) => {
  response.status(404).send('<h2 align=center>Page not found!</h2>')
})

// start server
const port = 3000
app.listen(port, () => {
  console.log(`App Server Listening at ${port}`)
})
