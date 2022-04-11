import React from 'react';
import Draggable from 'react-draggable';
import './TodoList.css';


function TodoList({ todo, setTodo }) {

	function handleDeleteTask(id) {
		console.log(id)
		setTodo(todo.filter((task) => task.id !== id))
	}


	return (
		<section className="todo-list">
			{todo.length > 0 ? <div className='todo-list__wrapper'>
				{/* {todo.length > 0 ? <h1 className='todo-list__title'>Мои задачи:</h1> : ''} */}
				{todo.map((task, i) =>
					<Draggable key={task.id} defaultPosition={task.defPos}>
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
			</div> : ''}
		</section>
	);
}

export default TodoList;