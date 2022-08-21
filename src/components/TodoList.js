import './TodoList.css';


const TodoList = ({ todo, handleTaskComplete, handleTaskEdited, handleTaskDeleted }) => {



	return (
		<section className='todo-list'>
			{todo && todo.length ? '' : (<><h1 className='todo-list__title'>Список задач пуст, бро 😏</h1></>)}
			<div className='todo-list__wrapper'>
				{todo && todo
					.map((task, i) =>
						<div id={task.id} key={task.id} className='todo-list__task-wrapper'
							style={{ backgroundColor: task.color }}>
							<div className='todo-list__task-wrapper-block'>
								<div className='todo-list__task-number'>
									{i + 1 + '. '}
								</div>
								<div className={task.done ? 'todo-list__task_done' : 'todo-list__task'}>
									{task.description}
								</div>
							</div>
							<div className='todo-list__task-wrapper-block'>
								<button className={task.done ?
									'todo-list__button todo-list__button_done todo-list__button_done-active'
									: 'todo-list__button todo-list__button_done'} onClick={() => {
										handleTaskComplete(task.id)
									}} />
								<button className='todo-list__button todo-list__button_delete' onClick={() => {
									handleTaskDeleted(task.id)
								}} />
								{task.done ? '' : (<button className='todo-list__button todo-list__button_edit' onClick={() => {
									handleTaskEdited(task)
								}} />)}
							</div>
						</div>
					)}
			</div>
		</section >
	);
}

export default TodoList;