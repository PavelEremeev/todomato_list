import React from 'react';
import Draggable from 'react-draggable';
import './TodoTask.css';


function TodoTask({taskData}) {
  return (
    <section className="todo">
		{
			taskData.map((task) => {
				return(
					<Draggable 
					key={task.id}
					defaultPosition={task.defaultPosition}>
					<div>{task.taskDescription}</div>
					</Draggable>
				)
			})
		}
    </section>
  );
}

export default TodoTask;