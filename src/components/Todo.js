import React from 'react';
import './Todo.css';


function Todo({onChange, onClick}) {
  return (
    <section className="todo">
		<input onChange={onChange} className='todo__input' type='text' placeholder='Введите задачу'/>
		<button onClick={onClick} className='todo__button'>Создать</button>
    </section>
  );
}

export default Todo;