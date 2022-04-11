import React, { useState } from 'react';
import './NewTask.css';


function NewTask({ onTaskCreated }) {

	const [taskDescription, setTaskDescription] = useState('');

	const handleInputChange = (evt) => {
		setTaskDescription(evt.target.value);
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
				taskDescription,
				id: Math.random().toString(20),
				defaultPos: {
					x: -100,
					y: -100
				},
				color: generateLightColorRgb(),
			});
			setTaskDescription('')
		}
	};


	return (
		<section className="new-task">
			<input
				onChange={handleInputChange}
				className='new-task__input'
				type='text'
				placeholder='Введите задачу'
				value={taskDescription}
			/>
			<button onClick={handleButtonClick} className='new-task__button'>Создать</button>
		</section>
	);
}

export default NewTask;