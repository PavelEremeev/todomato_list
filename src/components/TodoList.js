import React from 'react';
import './TodoList.css';


function TodoList({ todo, setTodo }) {


	const handleDeleteTask = (id) => {
		console.log(id)
		setTodo(todo.filter((task) => task.id !== id))
	}

	return (
		<section className='todo-list'>
			<div className='todo-list__wrapper'>
				{todo.map((task, i) =>
					<div id={task.id} key={task.id} className='todo-list__task-wrapper'
						style={{ backgroundColor: task.color }}>
						<div className='todo-list__task-number'>
							{i + 1 + '. '}
						</div>
						<div className='todo-list__task'>
							{task.taskDescription}
						</div>
						<button className='todo-list__delete-button' onClick={() => {

							handleDeleteTask(task.id)
						}}>
							X
						</button>
					</div>
				)}
			</div>
		</section >
	);
}

export default TodoList;