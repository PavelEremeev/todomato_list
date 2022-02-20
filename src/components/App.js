import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';
import TodoTask from './TodoTask';


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
				id: Math.random().toString(20),
				defaultPosition: {
					x: -100,
					y: -100
				}
			}
			setLocalTask((localTask) => [...localTask, newTask])
			setTask('')
		}
	}

  return (
    <div className="App">
		<Header/>
		<Todo onChange={handleChangeTask} onClick={handleNewTask} value={task}/>
		<TodoTask taskData={localTask}/>
    </div>
  );
}

export default App;
