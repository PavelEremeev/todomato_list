import React, { useState } from 'react';

import './TodoBoards.css';


function TodoBoards({ todo, inProgress, done, boards, setBoards, setTodo, setDone, setInprogress }) {

	const [currentTask, setCurrentTask] = useState(null)
	const [currentBoard, setCurrentBoard] = useState(null)





	const handleDragEnd = (evt) => {
		evt.target.style.borderBottom = 'none'

	}

	const handleDragOver = (evt) => {
		evt.preventDefault()
		if (evt.target.className === 'todo-board__task-wrapper') {
			evt.target.style.borderBottom = '2px solid white'
		}
	}

	const handleDragLeave = (evt) => {
		evt.target.style.borderBottom = 'none'
	}

	const handleDragStart = (evt, board, task) => {
		setCurrentBoard(board)
		setCurrentTask(task)
	}

	const handleDrop = (evt, board, task) => {
		evt.stopPropagation()
		evt.preventDefault()
		evt.target.style.borderBottom = 'none'
		const currentIndex = currentBoard.tasks.indexOf(currentTask)
		currentBoard.tasks.splice(currentIndex, 1)
		const dropIndex = board.tasks.indexOf(task);
		board.tasks.splice(dropIndex + 1, 0, currentTask)
		setBoards(boards.map(brd => {
			if (brd.id === board.id) {
				return board
			} if (brd.id === currentBoard.id) {
				return currentBoard
			}
			return brd
		}))
	}

	const handleBoardDrop = (evt, board) => {
		evt.stopPropagation()
		evt.preventDefault()
		board.tasks.push(currentTask)
		setCurrentBoard(previousBoard =>
		({
			...previousBoard,
			tasks: previousBoard.tasks.filter(t => t !== currentTask)
		}))
		// не понимаю почему удаляется целиком весь массив туду из LS вместо одного объекта. в консоли один объект.
		console.log(currentTask)
		console.log(currentBoard.lsName)

		if (board.id === 1) {
			setTodo((todo) => [...todo, currentTask])
		}
		if (board.id === 2) {
			setInprogress((inProgress) => [...inProgress, currentTask])
		}
		if (board.id === 3) {
			setDone((done) => [...done, currentTask])
		}
		setBoards(boards.map(brd => {
			if (brd.id === board.id) {
				return board
			} if (brd.id === currentBoard.id) {
				return currentBoard
			}
			return brd
		}))
	}

	const handleDeleteTask = (id) => {
		console.log(id)
		setTodo(todo.filter((task) => task.id !== id))
		// setInprogress(inProgress.filter((task) => task.id !== id))
		// setDone(done.filter((task) => task.id !== id))
	}

	return (
		<section className="todo-boards">
			{boards.map(board =>
				<div className='todo-board' key={board.id}
					onDragOver={(evt) => handleDragOver(evt)}
					onDrop={(evt) => handleBoardDrop(evt, board)}
				>
					<h3 className='todo-board__title'>{board.title}</h3>
					{board.tasks.map((task, i) =>
						<div className='todo-board__task-wrapper'
							key={task.id}
							draggable={true}
							onDragOver={(evt) => handleDragOver(evt)}
							onDragLeave={(evt) => handleDragLeave(evt)}
							onDragStart={(evt) => handleDragStart(evt, board, task)}
							onDragEnd={(evt) => handleDragEnd(evt)}
							onDrop={(evt) => handleDrop(evt, board, task)}
						>
							<div className='todo-board__task-number'>
								{i + 1 + '. '}
							</div>
							<div className='todo-board__task'>
								{task.taskDescription}
							</div>
							<button className='todo-board__delete-button' onClick={() => handleDeleteTask(task.id)}>
								X
							</button>
						</div>
					)}
				</div>
			)}
		</section>
	);
}

export default TodoBoards;