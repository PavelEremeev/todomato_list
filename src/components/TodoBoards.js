import React from 'react';

import './TodoBoards.css';


function TodoBoards({todo, boards}) {


  return (
    <section className="todo-boards">
			{boards.map(board => 
			 <div className='todo-board' key={board.id}>
				 <h3 className='todo-board__title'>{board.title}</h3>
				 {board.tasks.map((task,i) =>	
					<div className='todo-board__task' key={task.id}>
						{i+1 + '. '}{task.taskDescription}
						</div>
					)}
			</div>
			)}
    </section>
  );
}

export default TodoBoards;