import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';
import TodoBoards from './TodoBoards';
import Footer from './Footer';


const todoData = JSON.parse(localStorage.getItem('todo'))
const inProgressData = JSON.parse(localStorage.getItem('inProgress'))
const doneData = JSON.parse(localStorage.getItem('done'))


function App() {

	const [task, setTask] = useState('')
	const [todo, setTodo] = useState(todoData || [])
	const [inProgress, setInprogress] = useState(inProgressData || [])
	const [done, setDone] = useState(doneData || [])
	const [boards, setBoards] = useState(
		[{id: 1, title: 'ToDo', lsName: 'todo', tasks: todo},
		 {id: 2, title: 'В процессе', lsName: 'inProgress', tasks: inProgress},
		 {id: 3, title: 'Выполнено', lsName: 'done', tasks: done},
		])


	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo))
	}, [todo])

	const handleChangeTask = (evt) => {
		setTask(evt.target.value)
	}
	
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
		<TodoBoards 
		todo={todo} 
		inProgress={inProgress} 
		done={done} 
		boards={boards}
		setBoards={setBoards}
		setInprogress={setInprogress}
		setDone={setDone}
		/>
		<Footer/>
    </div>
  );
}

export default App;
