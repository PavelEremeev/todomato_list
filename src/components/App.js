import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';
import TodoBoards from './TodoBoards';
import TodoTask from './TodoBoards';


const todoData = JSON.parse(localStorage.getItem('todo'))
const inProgressData = JSON.parse(localStorage.getItem('inProgress'))
const doneData = JSON.parse(localStorage.getItem('done'))


function App() {

	const [task, setTask] = useState('')
	const [todo, setTodo] = useState(todoData || [])
	const [inProgress, setInprogress] = useState(inProgressData || [])
	const [done, setDone] = useState(doneData || [])
	const [boards, setBoards] = useState(
		[{id: 1, title: 'ToDo', tasks: todo},
		 {id: 2, title: 'В процессе', tasks: inProgress},
		 {id: 3, title: 'Выполнено', tasks: done},
		])


	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo))
		localStorage.setItem('inProgress', JSON.stringify(inProgress))
		localStorage.setItem('done', JSON.stringify(done))
	}, [todo, inProgress, done])

	const handleChangeTask = (evt) => {
		setTask(evt.target.value)
	}

	useEffect(() => {
		
	}, [todo])

	const handleNewTask = () => {
		if (task.trim() !== '') {
			const newTask = {
				taskDescription: task,
				id: Math.random().toString(20)
			}
			setTodo((todo) => [...todo, newTask])
			setTask('')
		}
	}


	console.log(boards[0].tasks)

  return (
    <div className="App">
		<Header/>
		<Todo onChange={handleChangeTask} onClick={handleNewTask} value={task}/>
		<TodoBoards todo={todo} boards={boards}/>
    </div>
  );
}

export default App;
