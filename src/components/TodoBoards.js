import React from 'react';

import './TodoBoards.css';


function TodoBoards({todo, inProgress, done, boards}) {


  return (
    <section className="todo-boards">
			{/* {boards.map(board => 
			 <div className='todo-board' key={board.id}>
				 <h3 className='todo-board__title'>{board.title}</h3>
				 {board.tasks.map((task,i) =>	
					<div className='todo-board__task' key={task.id}>
						{i+1 + '. '}{task.taskDescription}
						</div>
					)}
			</div>
			)} */}
			<div className='todo-board'>
				<h3 className='todo-board__title'>
				{boards[0].title}
				</h3>
				{todo.map((task,i) =>	
					<div className='todo-board__task' 
					key={task.id} 
					draggable={true}
					onDragOver={}
					onDragLeave={}
					
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
					
					>
						{i+1 + '. '}{task.taskDescription}
						</div>
					)}
			</div>
			<div className='todo-board'>
				<h3 className='todo-board__title'>
				{boards[1].title}
				</h3>
				{done.map((task,i) =>	
					<div className='todo-board__task' 
					key={task.id} 
					draggable={true}
					
					>
						{i+1 + '. '}{task.taskDescription}
						</div>
					)}
			</div>
    </section>
  );
}

export default TodoBoards;