import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';

const taskData = JSON.parse(localStorage.getItem('tasks'))

function App() {

	const [task, setTask] = useState('')
	const [localTask, setLocalTask] = useState(taskData || [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(localTask))
	}, [localTask])

	const handleChangeTask = (evt) => {
		setTask(evt.target.value)
	}

	const handleNewTask = () => {
		if (task.trim() !== '') {
			const newTask = {
				taskDescription: task,
				id: Math.random().toString(20)
			}
			setLocalTask((localTask) => [...localTask, newTask])
			setTask('')
		}
	}

  return (
    <div className="App">
		<Header></Header>
		<Todo onChange={handleChangeTask} onClick={handleNewTask}></Todo>
    </div>
  );
}

export default App;
