import { createContext, useState } from "react";

export const todoContext =  createContext()

const TodoContextProvider = (props) => {
    const [todoTasks, setTodoTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])

    const addTaskHandler = (newTask) => {
        setTodoTasks([...todoTasks, newTask])
    }

    const deleteTaskHandler = (id) => {
        const seletedTask = todoTasks.filter((task) => task.id !== id)
        setTodoTasks(seletedTask)
    }

    const moveTaskHandler = (id) => {
        let taskToBeMoved = todoTasks.filter((task) => task.id === id)
        console.log("taskToBeMoved", taskToBeMoved, taskToBeMoved.task)
        setCompletedTasks([...completedTasks, {id, task: taskToBeMoved[0].task, status: 'completed'}])
        setTodoTasks(todoTasks.filter((item) => item.id !== taskToBeMoved[0].id))
    }
    
    return(
        <todoContext.Provider value={{addTaskHandler, moveTaskHandler, deleteTaskHandler, todoTasks, completedTasks}}>
            {props.children}
        </todoContext.Provider>
    )
}

export default TodoContextProvider