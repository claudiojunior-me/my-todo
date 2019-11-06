import React, { useState } from 'react'
import shortid from 'shortid'
import AddTodo from './AddTodo'

const Home = () => {
	const [todos, setTodos] = useState([])

	const addTodo = (todoText) => {
		setTodos([
			{
				id: shortid.generate(),
				todo: todoText,
				done: false,
				addedOn: new Date(),
			},
			...todos,
		])
	}

	const toggleTodoDone = (todoItem) => {
		todoItem.done = !todoItem.done
		setTodos([...todos])
	}

	return (
		<>
			<h1>My Todos</h1>

			<AddTodo onSubmit={addTodo} />

			{todos.map((item) => (
				<div key={item.id}>
					<span>
						{item.todo} - {item.done.toString()}
					</span>
					{!item.done && <input type='button' value='Done' onClick={() => toggleTodoDone(item)} />}
				</div>
			))}
		</>
	)
}

export default Home
