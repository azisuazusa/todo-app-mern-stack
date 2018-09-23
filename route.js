import express from 'express'
import * as controller from '../controller'

const router = express.Router()

router.route('/')
  .get(controller.getTodos)
  .post(controller.addTodo)
  .put(controller.updateTodo)

router.route('/:id')
  .get(controller.getTodo)
  .delete(controller.deleteTodo)

export default router

