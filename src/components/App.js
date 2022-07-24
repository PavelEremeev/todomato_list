import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './App.css';


const todoData = JSON.parse(localStorage.getItem('todo'))

function App() {
	const [todo, setTodo] = useState(todoData || [])

	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo))

	}, [todo])




	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Main todo={todo} setTodo={setTodo} />} />
			</Routes>
			<Footer />
		</BrowserRouter>

	);
}

export default App;
