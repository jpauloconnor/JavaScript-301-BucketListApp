import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import * as actions from '../actions';

//handleToDoSubmit(this.handleToDoSubmit.bind(this))
function handleTodoSubmit({ todo }) {
      console.log(todo);
      this.props.postTodo({ todo });
}

let AddTodo = ({ dispatch }) => {
  let input


  return (
    <div>
      <form onSubmit={e => {
        
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo