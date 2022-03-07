import React, {useState} from 'react';

import './TodoBoards.css';


function TodoBoards({todo, inProgress, done, boards, setBoards }) {
	const [currentTask, setCurrentTask] = useState(null)
	const [currentBoard, setCurrentBoard] = useState(null)
	
	const handleDragEnd = (evt) => {
		evt.target.style.boxShadow = 'none'
	}

	const handleDragOver = (evt) => {
		evt.preventDefault()
		if (evt.target.className === 'todo-board__task') {
			evt.target.style.boxShadow = '0 2px 3px gray'
		}
	}

	const handleDragLeave = (evt) => {
		evt.target.style.boxShadow = 'none'
	}

	const handleDragStart = (evt, board, task) => {
		setCurrentBoard(board)
		setCurrentTask(task)
	}

	const handleDrop = (evt, board, task) => {
		evt.preventDefault()
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
			{/* <div className='todo-board'>
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
			</div>
			<div className='todo-board'>
				<h3 className='todo-board__title'>
				{boards[1].title}
				</h3>
				{inProgress.map((task,i) =>	
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
			</div>
			<div className='todo-board'>
				<h3 className='todo-board__title'>
				{boards[2].title}
				</h3>
				{done.map((task,i) =>	
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
					onDrop={(evt) => handleDrop(evt)}						>
						{i+1 + '. '}{task.taskDescription}
						</div>
					)}
			</div>
			)}
    </section>
  );
}

export default TodoBoards;