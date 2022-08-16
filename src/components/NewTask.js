import ColorPicker from './ColorPicker';
import './NewTask.css';

const NewTask = (
	{ newTask,
		setNewTask,
		updatedTask,
		handleTaskChanged,
		handleTaskUpdated,
		handleTaskCancelUpdated,
		handleTaskCreated,
		handleChangeColor,
		color
	}) => {



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
						onKeyPress={(evt) => evt.key === 'Enter' && handleTaskUpdated()}
					/>
					<ColorPicker handleChangeColor={handleChangeColor} color={color} />
					<button onClick={handleTaskUpdated} className='new-task__button'>Обновить</button>
					<button onClick={handleTaskCancelUpdated} className='new-task__button'>Отменить</button>
				</>) : (
				<>
					<textarea
						onChange={(evt) => setNewTask(evt.target.value)}
						className='new-task__input'
						type='text'
						placeholder='Введите задачу'
						value={newTask}
						onKeyPress={(evt) => evt.key === 'Enter' && handleTaskCreated()}
						maxLength='69'
						cols='2'
					/>
					<button onClick={handleTaskCreated} className='new-task__button'>Создать</button>

				</>)}
		</section>
	);
}

export default NewTask;