import React, {useState} from 'react';

import './TodoBoards.css';


function TodoBoards({todo, inProgress, done, boards, setBoards }) {
	const todoArr = [todo, inProgress, done]
	const [currentTask, setCurrentTask] = useState(null)
	const [currentBoard, setCurrentBoard] = useState(null)
	
	const handleDragEnd = (evt) => {
		evt.target.style.borderBottom = 'none'
	}

	const handleDragOver = (evt) => {
		evt.preventDefault()
		if (evt.target.className === 'todo-board__task') {
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
		evt.preventDefault()
		evt.stopPropagation()
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
		evt.preventDefault()
		evt.stopPropagation()
		board.tasks.push(currentTask)
		const currentIndex = currentBoard.tasks.indexOf(currentTask)
		currentBoard.tasks.splice(currentIndex, 1)
		setBoards(boards.map(brd => {
			if (brd.id === board.id) {
				return board
			} if (brd.id === currentBoard.id) {
				return currentBoard
			}
			return brd
		}))
	}

  return (
    <section className="todo-boards">
			{/* <div className='todo-board'
			 onDragOver={(evt) => handleDragOver(evt)}
			 onDrop={(evt) => handleBoardDrop(evt, board)}
			>
				<h3 className='todo-board__title'>
				{boards[0].title}
				</h3>
				{todo.map((task,i) =>	
					<div className='todo-board__task' 
					key={task.id} 
					draggable={true}
					onDragOver={(evt) => handleDragOver(evt)}
					onDragLeave={(evt) => handleDragLeave(evt)}
					onDragStart={(evt) => handleDragStart(evt, board, task)}
					onDragEnd={(evt) => handleDragEnd(evt)}
					onDrop={(evt) => handleDrop(evt)}
					>
						{i+1 + '. '}{task.taskDescription}
						</div>
					)}
			</div> */}
			{boards.map(board => 
			 <div className='todo-board' key={board.id}
			 onDragOver={(evt) => handleDragOver(evt)}
			 onDrop={(evt) => handleBoardDrop(evt, board)}
			 >
				 <h3 className='todo-board__title'>{board.title}</h3>
				 {board.tasks.map((task,i) =>	
					<div className='todo-board__task' 
					key={task.id}
					draggable={true}
					onDragOver={(evt) => handleDragOver(evt)}
					onDragLeave={(evt) => handleDragLeave(evt)}
					onDragStart={(evt) => handleDragStart(evt, board, task)}
					onDragEnd={(evt) => handleDragEnd(evt)}
					onDrop={(evt) => handleDrop(evt, board, task)}						>
						{i+1 + '. '}{task.taskDescription}
						</div>
					)}
			</div>
			)}
    </section>
  );
}

export default TodoBoards;