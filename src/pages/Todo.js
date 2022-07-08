import React from 'react'
import StatusCard from '../components/Card/StatusCard'
import TodoInput from '../components/Card/TodoInput'
import AltNavbar from '../components/Navbar/AltNavbar'
import './Todo.css'

const Todo = () => {
  return (
    <div className='todo'>
        <AltNavbar />
        <TodoInput />
        <div className="todo__cards">
            <div className="todo__cards-type">
                <StatusCard status='todo' />
            </div>
            
            <div className="todo__cards-type">
                <StatusCard status='completed' />
            </div>
        </div>
    </div>
  )
}

export default Todo