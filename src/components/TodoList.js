import React, { useState } from 'react';

import './TodoList.css';


function TodoList({ todo, setTodo }) {

	function handleDeleteTask(task) {

	}


	return (
		<section className="todo-list">
			<div className='todo-list__wrapper'>
				{todo.length > 0 ? <h1 className='todo-list__title'>Мои задачи:</h1> : ''}
				{todo.map((task, i) =>

					<div className='todo-list__task-wrapper'
						key={task.id}
					>
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
				)}
			</div>
		</section>
	);
}

export default TodoList;