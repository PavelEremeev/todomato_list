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


	const Main = () => {
		const [newTask, setNewTask] = useState('')
		const [updatedTask, setUpdatedTask] = useState('')


		const generateLightColorRgb = () => {
			const red = Math.floor((1 + Math.random()) * 256 / 2);
			const green = Math.floor((1 + Math.random()) * 256 / 2);
			const blue = Math.floor((1 + Math.random()) * 256 / 2);
			return "rgb(" + red + ", " + green + ", " + blue + ")";
		}

		const handleTaskCreated = () => {
			if (newTask.trim() !== '') {
				let newTodo = {
					description: newTask,
					id: Math.random().toString(20),
					done: false,
					color: generateLightColorRgb()
				}
				setTodo((todo) => [...todo, newTodo])
				setNewTask('')
			}


		}

		const handleTaskUpdated = () => {
			if (updatedTask.id) {
				let filteredTodo = [...todo].filter(task => task.id !== updatedTask.id)
				let updateTodo = [...filteredTodo, updatedTask]
				setTodo(updateTodo)
				setUpdatedTask('')
			}

		}

		const handleTaskCancelUpdated = (task) => {
			setUpdatedTask('')

		}

		const handleTaskChanged = (evt) => {
			let changedTodo = {
				id: updatedTask.id,
				description: evt.target.value,
				color: updatedTask.color,
				done: updatedTask.done ? true : false,
			}
			setUpdatedTask(changedTodo)
		}

		const handleTaskComplete = (id) => {
			let completeTask = todo.map(task => {
				if (task.id === id) {
					return ({ ...task, done: !task.done })
				}
				return task
			})
			setTodo(completeTask)
		}

		const handleTaskEdited = (task) => {
			setUpdatedTask(task)
		}

		const handleTaskDeleted = (id) => {
			setTodo(todo.filter((task) => task.id !== id))
		}

		return (
			<>
				<NewTask
					newTask={newTask}
					setNewTask={setNewTask}
					updatedTask={updatedTask}
					handleTaskChanged={handleTaskChanged}
					handleTaskCancelUpdated={handleTaskCancelUpdated}
					handleTaskUpdated={handleTaskUpdated}
					handleTaskCreated={handleTaskCreated}
				/>
				<TodoList
					todo={todo}
					handleTaskComplete={handleTaskComplete}
					handleTaskDeleted={handleTaskDeleted}
					handleTaskEdited={handleTaskEdited}

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
