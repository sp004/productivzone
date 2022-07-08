import React, { useContext } from 'react'
import { todoContext } from '../../contexts/todo-context'
import './TextCard.css'
import {AiFillDelete} from 'react-icons/ai'
import {BiArrowToRight} from 'react-icons/bi'

const TextCard = ({task, status, styleClass}) => {
    const ctx = useContext(todoContext)

    const moveHandler = (id) => {
        ctx.moveTaskHandler(id)
    }

    const deleteHandler = (id) => {
        ctx.deleteTaskHandler(id)
    }

console.log(status)
  return (
    <li className='textCard'>

        {status === 'todo' &&
        <div className='textCard__tasks'>
            <div className='textCard__tasks-text'>
                <p className={styleClass}>{task.task}</p>
            </div>
            <div className='textCard__tasks-action'>
                <BiArrowToRight onClick={() => moveHandler(task.id)} title='Move to Completed' className='textCard__tasks-moveicon' />
                <AiFillDelete onClick={() => deleteHandler(task.id)} title='Delete Task' className='textCard__tasks-deleteicon' />
            </div>
        </div>}

        {status === 'completed' && <p className={styleClass}>{task.task}</p>}
    </li>
  )
}

export default TextCard