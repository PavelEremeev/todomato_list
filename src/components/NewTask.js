import React, {useState} from 'react';
import './NewTask.css';


function NewTask({onTaskCreated}) {

	const [taskDescription, setTaskDescription] = useState('');

	const handleInputChange = (evt) => {
		  setTaskDescription(evt.target.value);
	  };
	
	  const handleButtonClick = () => {
		if (taskDescription.trim() !== '') { 
		onTaskCreated({
		  taskDescription,
		  id: Math.random().toString(20)
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