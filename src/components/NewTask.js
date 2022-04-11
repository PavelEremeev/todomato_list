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

	const generatePosition = () => {
		const xAxis = Math.floor((1 + Math.random()) * 600 / 2);
		const yAxis = Math.floor((1 + Math.random()) * -100 / 2);
		console.log(xAxis, yAxis)
		return { x: xAxis, y: yAxis };
	}


	const handleButtonClick = () => {
		if (taskDescription.trim() !== '') {
			onTaskCreated({
				taskDescription,
				id: Math.random().toString(20),
				defPos: generatePosition(),
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