import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import NewTask from './NewTask';
import TodoBoards from './TodoBoards';
import Footer from './Footer';

import './App.css';


const todoData = JSON.parse(localStorage.getItem('todo'))
const inProgressData = JSON.parse(localStorage.getItem('inProgress'))
const doneData = JSON.parse(localStorage.getItem('done'))


function App() {

	const [todo, setTodo] = useState(todoData || [])
	const [inProgress, setInprogress] = useState(inProgressData || [])
	const [done, setDone] = useState(doneData || [])
	const [boards, setBoards] = useState(
		[{ id: 1, title: 'ToDo', lsName: 'todo', tasks: todo },
		{ id: 2, title: 'В процессе', lsName: 'inProgress', tasks: inProgress },
		{ id: 3, title: 'Выполнено', lsName: 'done', tasks: done },
		])


	useEffect(() => {

		localStorage.setItem('todo', JSON.stringify(todo))
		setBoards(previousBoards => previousBoards.map(b => b.id === 1 ? { ...b, tasks: todo } : b));
	}, [todo])

	useEffect(() => {

		localStorage.setItem('inProgress', JSON.stringify(inProgress))
		setBoards(previousBoards => previousBoards.map(b => b.id === 2 ? { ...b, tasks: inProgress } : b));
	}, [inProgress])

	useEffect(() => {

		localStorage.setItem('done', JSON.stringify(done))
		setBoards(previousBoards => previousBoards.map(b => b.id === 3 ? { ...b, tasks: done } : b));
	}, [done])


	const handleTaskCreated = (newTask) => {
		setTodo((todo) => [...todo, newTask])

	}

	const Main = () => {
		return (
			<>
				<NewTask onTaskCreated={handleTaskCreated} />
				<TodoBoards
					todo={todo}
					inProgress={inProgress}
					done={done}
					boards={boards}
					setBoards={setBoards}
					setInprogress={setInprogress}
					setDone={setDone}
					setTodo={setTodo}
				/>
			</>
		)
	}

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
			</Routes>
			<Footer />
		</BrowserRouter>

	);
}

export default App;
