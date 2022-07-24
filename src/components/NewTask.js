import './NewTask.css';

const NewTask = (
	{ newTask,
		setNewTask,
		updatedTask,
		handleTaskChanged,
		handleTaskUpdated,
		handleTaskCancelUpdated,
		handleTaskCreated }) => {


	return (
		<section className="new-task">
			{updatedTask && updatedTask ? (
				<>
					<input
						onChange={(evt) => handleTaskChanged(evt)}
						className='new-task__input'
						type='text'
						placeholder='Измените задачу'
						value={updatedTask && updatedTask.description}
					/>
					<button onClick={handleTaskUpdated} className='new-task__button'>Обновить</button>
					<button onClick={handleTaskCancelUpdated} className='new-task__button'>Отменить</button>
				</>) : (
				<>
					<input
						onChange={(evt) => setNewTask(evt.target.value)}
						className='new-task__input'
						type='text'
						placeholder='Введите задачу'
						value={newTask}
					/>
					<button onClick={handleTaskCreated} className='new-task__button'>Создать</button>
				</>)}
		</section>
	);
}

export default NewTask;