import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import NewTask from './NewTask';
import TodoBoards from './TodoBoards';
import Footer from './Footer';


const todoData = JSON.parse(localStorage.getItem('todo'))
const inProgressData = JSON.parse(localStorage.getItem('inProgress'))
const doneData = JSON.parse(localStorage.getItem('done'))


function App() {

	const [todo, setTodo] = useState(todoData || [])
	const [inProgress, setInprogress] = useState(inProgressData || [])
	const [done, setDone] = useState(doneData || [])
	const [boards, setBoards] = useState(
		[{id: 1, title: 'ToDo', lsName: 'todo', tasks: todo},
		 {id: 2, title: 'В процессе', lsName: 'inProgress', tasks: inProgress},
		 {id: 3, title: 'Выполнено', lsName: 'done', tasks: done},
		])


	useEffect(() => {
		
		localStorage.setItem('todo', JSON.stringify(todo))
		setBoards(previousBoards => previousBoards.map(b => b.id === 1 ? {...b, tasks: todo} : b));
	}, [todo])


	const handleTaskCreated = (newTask) => {
		setTodo((todo) => [...todo, newTask])
		
	  }
	

  return (
    <div className='App'>
		<Header/>
		<NewTask  onTaskCreated={handleTaskCreated}/>
		<TodoBoards 
		todo={todo} 
		inProgress={inProgress} 
		done={done} 
		boards={boards}
		setBoards={setBoards}
		setInprogress={setInprogress}
		setDone={setDone}
		setTodo={setTodo}
		/>
		<Footer/>
    </div>
  );
}

export default App;
