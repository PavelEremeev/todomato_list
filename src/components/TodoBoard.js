import React, { useState } from 'react';

import './TodoBoard.css';


function TodoBoard({ todo, setBoards, setTodo }) {

	function handleDeleteTask(task) {

	}

	return (
		<section className="todo">
			{todo.map((task, i) =>
				<div className='todo-board__task-wrapper'
					key={task.id}
				>
					<div className='todo-board__task-number'>
						{i + 1 + '. '}
					</div>
					<div className='todo-board__task'>
						{task.taskDescription}
					</div>
					<button className='todo-board__delete-button' onClick={() => handleDeleteTask(task.id)}>
						X
					</button>
				</div>
			)}
		</section>
	);
}

export default TodoBoard;