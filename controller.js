import mongoose from 'mongoose'
import todo from './model'

export const getTodos = (request, response) => {
  todo.find().exec((error, todos) => {
    if (error) {
      return response.json({
        'success': false,
        'message': 'Gagal mengambil todos!',
        error
      })
    }
    return response.json({
      'success': true,
      'message': 'Berhasil mengambil todos!',
      todos
    })
  })
}

export const addTodo = (request, response) => {
  const newTodo = new todo(request.body)
  newTodo.save((error, todo) => {
    if (error) {
      return response.json({
        'success': false,
        'message': 'Gagal menambah todo!',
        error
      })
    }
    return response.json({
      'success': true,
      'message': 'Berhasil menambah todo!',
      todo
    })
  })
}

export const updateTodo = (request, response) => {
  todo.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true }, (error, todo) => {
    if (error) {
      return response.json({
        'success': false,
        'message': 'Gagal mengupdate todo!',
        error
      })
    }
    return response.json({
      'success': true,
      'message': 'Berhasil mengupdate todo!',
      todo
    })
  })
}

export const getTodo = (request, response) => {
  todo.find({ _id: request.params.id }).exec((error, todo) => {
    if (error) {
      return response.json({
        'success': false,
        'message': 'Gagal mengambil todo!',
        error
      })
    }
    console.log('_id', request.params.id);
    return response.json({
      'success': true,
      'message': 'Berhasil mengambil todo!',
      todo
    })
  })
}

export const deleteTodo = (request, response) => {
  todo.findByIdAndRemove({ _id: request.params.id }).exec((error, todo) => {
    if (error) {
      return response.json({
        'success': false,
        'message': 'Terjadi error!',
        error
      })
    }
    if (todo.length > 0) {
      return response.json({
        'success': true,
        'message': 'Berhasil mendapatkan todo dengen Id ${request.body.id}',
        todo
      })
    } else {
      return response.json({
        'success': true,
        'message': 'Tidak ada todo dengan Id ${request.body.id}',
      })
    }
  })
}
