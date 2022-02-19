import React from 'react';
import './Todo.css';


function Todo() {
  return (
    <section className="todo">
		<input  className='todo__input' type='text' placeholder='Введите задачу'/>
		<button className='todo__button'>Создать</button>
    </section>
  );
}

export default Todo;