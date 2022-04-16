import React from 'react';
import Draggable from 'react-draggable';
import './TodoList.css';


function TodoList({ todo, setTodo, cleanUp }) {

	const handleDeleteTask = (id) => {
		console.log(id)
		setTodo(todo.filter((task) => task.id !== id))
	}


	const handleUpdatePosition = (data, i) => {
		let todoArr = [...todo]
		todoArr[i].defPos = { x: data.x, y: data.y }
		setTodo(todoArr)
	}

	return (
		<section className="todo-list">
			<div className='todo-list__wrapper'>
				{todo.map((task, i) =>
					<Draggable key={task.id}
						defaultPosition={task.defPos}
						onStop={(_, data) => {
							handleUpdatePosition(data, i);
							return false
						}}
					>
						<div className='todo-list__task-wrapper'
							style={{ backgroundColor: task.color }}>
							<div className='todo-list__task-number'>
								{i + 1 + '. '}
							</div>
							<div className='todo-list__task'>
								{task.taskDescription}
							</div>
							<button className='todo-list__delete-button' onClick={() => handleDeleteTask(task.id)}>
								X
							</button>
						</div>
					</Draggable>
				)}
			</div>
		</section>
	);
}

export default TodoList;