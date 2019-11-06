import React, { useState } from 'react'

const AddTodo = ({ onSubmit }) => {
  const [todoText, setTodoText] = useState('')

  const onSubmitEvt = (evt) => {
    if (evt) {
      evt.preventDefault()
    }

    if (onSubmit) {
      onSubmit(todoText)
    }

    setTodoText('')
  }

  return (
    <div>
      <form onSubmit={onSubmitEvt}>
        <input type='text' value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTodo
