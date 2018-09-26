import express from 'express'
import * as controller from './controller'

const route = express.Router()

route.route('/')
  .get(controller.getTodos)
  .post(controller.addTodo)

route.route('/:id')
  .get(controller.getTodo)
  .put(controller.updateTodo)
  .delete(controller.deleteTodo)

export default route

