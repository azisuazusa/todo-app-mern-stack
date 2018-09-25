import express from 'express'
import * as controller from './controller'

const route = express.Router()

route.route('/')
  .get(controller.getTodos)
  .post(controller.addTodo)
  .put(controller.updateTodo)

route.route('/:id')
  .get(controller.getTodo)
  .delete(controller.deleteTodo)

export default route

