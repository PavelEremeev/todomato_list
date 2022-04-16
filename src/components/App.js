import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import NewTask from './NewTask';
import TodoList from './TodoList';
import Footer from './Footer';

import './App.css';


const todoData = JSON.parse(localStorage.getItem('todo'))

function App() {
	const [todo, setTodo] = useState(todoData || [])


	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo))

	}, [todo])


	const handleTaskCreated = (newTask) => {
		setTodo((todo) => [...todo, newTask])

	}



	const Main = () => {
		return (
			<>
				<NewTask onTaskCreated={handleTaskCreated} />
				<TodoList
					todo={todo}
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
