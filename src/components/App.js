import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timer from './Timer/Timer';
import Homepage from './Homepage/Homepage';
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
			<Routes>
				<Route path='/' element={<Homepage todo={todo} setTodo={setTodo} />} />
				<Route path='/timer' element={<Timer />} />
			</Routes>
			<Footer />
		</BrowserRouter>

	);
}

export default App;
