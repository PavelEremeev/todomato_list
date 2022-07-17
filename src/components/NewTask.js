import React, { useState } from 'react';
import './NewTask.css';


function NewTask({ onTaskCreated, updatedTask }) {

	const [taskDescription, setTaskDescription] = useState('');
	const [updatedTaskDescription, setUpdatedTaskDescription] = useState(updatedTask || '')

	const handleInputChangeTask = (evt) => {

		setTaskDescription(evt.target.value);
	};

	const handleInputChangeUpdatedTask = (evt) => {
		console.log(updatedTaskDescription)
		// setUpdatedTaskDescription(evt.target.value)
		let newDescriptionTask = {
			description: evt.target.value,
			id: updatedTask.id,
			checked: updatedTask.checked,
			color: updatedTask.color,
		}
		setUpdatedTaskDescription(newDescriptionTask)

	};

	const generateLightColorRgb = () => {
		const red = Math.floor((1 + Math.random()) * 256 / 2);
		const green = Math.floor((1 + Math.random()) * 256 / 2);
		const blue = Math.floor((1 + Math.random()) * 256 / 2);
		return "rgb(" + red + ", " + green + ", " + blue + ")";
	}




	const handleButtonClick = () => {
		if (taskDescription.trim() !== '') {
			onTaskCreated({
				description: taskDescription,
				id: Math.random().toString(20),
				checked: false,
				color: generateLightColorRgb(),
			});
			setTaskDescription('')
		}
	};

	const handleCancelUpdatedTask = () => {
		setUpdatedTaskDescription('')
	}

	const handleUpdateTask = () => {

	}

	return (
		<section className="new-task">
			<input
				onChange={handleInputChangeTask}
				className='new-task__input'
				type='text'
				placeholder='Введите задачу'
				value={taskDescription}
			/>
			<button onClick={handleButtonClick} className='new-task__button'>Создать</button>
			<input
				onChange={(evt) => handleInputChangeUpdatedTask(evt)}
				className='new-task__input'
				type='text'
				placeholder='Измените задачу'
				value={updatedTaskDescription && updatedTaskDescription.description}
			/>
			<button onClick={handleUpdateTask} className='new-task__button'>Обновить</button>
			<button onClick={handleCancelUpdatedTask} className='new-task__button'>Отменить</button>
		</section>
	);
}

export default NewTask;