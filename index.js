import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import route from './route'

const app = express()

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept')
  next();
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 3001
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/todo-app-mern-stack', {
  useNewUrlParser: true
})

app.use('/api', route)

app.get('/', (request, response) => {
  return response.end('API Working')
})

app.use((request, response, next) => {
  response.status(404).send('<h2 align=center>Page not found!</h2>')
})

app.listen(port, () => {
  console.log(`App Server Listening at ${port}`)
})
