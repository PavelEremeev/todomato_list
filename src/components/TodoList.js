import './TodoList.css';


const TodoList = ({ todo, handleTaskComplete, handleTaskEdited, handleTaskDeleted }) => {



	return (
		<section className='todo-list'>
			{todo && todo.length ? '' : (<><h1>No tasks bro</h1></>)}
			<div className='todo-list__wrapper'>
				{todo && todo
					.map((task, i) =>
						<div id={task.id} key={task.id} className='todo-list__task-wrapper'
							style={{ backgroundColor: task.color }}>
							<div className='todo-list__task-number'>
								{i + 1 + '. '}
							</div>
							<div className={task.done ? 'todo-list__task_done' : 'todo-list__task'}>
								{task.description}
							</div>

							<button className='todo-list__button' onClick={() => {
								handleTaskComplete(task.id)
							}}>
								Done
							</button>
							{task.done ? '' : (<button className='todo-list__button' onClick={() => {
								handleTaskEdited(task)
							}}>
								Edit
							</button>)}

							<button className='todo-list__button' onClick={() => {
								handleTaskDeleted(task.id)
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