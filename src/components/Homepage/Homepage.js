import React, { useState } from "react"
import Header from "../Header";
import NewTask from './NewTask';
import TodoList from './TodoList';

const Homepage = ({ todo, setTodo }) => {
    const [newTask, setNewTask] = useState('')
    const [updatedTask, setUpdatedTask] = useState('')
    const [color, setColor] = useState('#fec3c3')

    // Изменение цвета фона таски
    const handleChangeColor = (evt) => {
        setColor(evt.target.value)

        let changedTodo = {
            id: updatedTask.id,
            description: updatedTask.description,
            color: evt.target.value,
            done: updatedTask.done ? true : false,
        }
        setUpdatedTask(changedTodo)
    }

    // Создание таски
    const handleTaskCreated = () => {
        if (newTask.trim() !== '') {
            let newTodo = {
                description: newTask,
                id: Math.random().toString(20),
                done: false,
                color: color
            }
            setTodo((todo) => [...todo, newTodo])
            setNewTask('')
        }

    }

    // Обновление измененной таски
    const handleTaskUpdated = () => {
        if (updatedTask.id) {
            let filteredTodo = [...todo].filter(task => task.id !== updatedTask.id)
            let updateTodo = [...filteredTodo, updatedTask]
            setTodo(updateTodo)
            setUpdatedTask('')
        }

    }

    // Отмена изменения обновления
    const handleTaskCancelUpdated = (task) => {
        setUpdatedTask('')

    }
    // Изменение таски
    const handleTaskChanged = (evt) => {
        let changedTodo = {
            id: updatedTask.id,
            description: evt.target.value,
            color: updatedTask.color,
            done: updatedTask.done ? true : false,
        }
        setUpdatedTask(changedTodo)
    }
    // Подсвечивание завершенной таски
    const handleTaskComplete = (id) => {
        let completeTask = todo.map(task => {
            if (task.id === id) {
                return ({ ...task, done: !task.done })
            }
            return task
        })
        setTodo(completeTask)
    }

    // Редактирование таски 
    const handleTaskEdited = (task) => {
        setUpdatedTask(task)
    }

    // Удаление таски    
    const handleTaskDeleted = (id) => {
        setTodo(todo.filter((task) => task.id !== id))
    }


    return (
        <>
            <Header />
            <main>
                <NewTask
                    newTask={newTask}
                    setNewTask={setNewTask}
                    updatedTask={updatedTask}
                    handleTaskChanged={handleTaskChanged}
                    handleTaskCancelUpdated={handleTaskCancelUpdated}
                    handleTaskUpdated={handleTaskUpdated}
                    handleTaskCreated={handleTaskCreated}
                    handleChangeColor={handleChangeColor}
                    color={color}
                />
                <TodoList
                    todo={todo}
                    handleTaskComplete={handleTaskComplete}
                    handleTaskDeleted={handleTaskDeleted}
                    handleTaskEdited={handleTaskEdited}

                />
            </main>
        </>
    )
}

export default Homepage;