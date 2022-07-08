import React, { useContext, useState } from "react"
import { todoContext } from "../../contexts/todo-context";
import './TodoInput.css'

const TodoInput = () => {
    const ctx = useContext(todoContext)

    const [text, setText] = useState('')
    const [error, setError] = useState(false)

    const addTodoHandler = (e) => {
        e.preventDefault()
        setError(false)
        if(text.trim().length === 0){
            setError(true)
            return
        }else{
            ctx.addTaskHandler({
                id: Math.random(100).toFixed(3),
                task: text,
                status: 'todo'
            })
        }
        setText('')
    }
  return (
    <div className="input">
        <div className="todoinput">
            <form onSubmit={addTodoHandler}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a task and Press Enter" onFocus={() => setError(false)} required />
            </form>
        </div>
            {error && <p className="error">Please enter text</p>}
    </div>
  );
};

export default TodoInput;
