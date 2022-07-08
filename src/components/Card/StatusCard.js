import React, { useContext } from "react";
import { todoContext } from "../../contexts/todo-context";
import "./StatusCard.css";
import TextCard from "./TextCard";

const StatusCard = ({ status }) => {
  const ctx = useContext(todoContext)
  return (
    <>
      <h2>{status}</h2>
      <div className="statuscard">

          {status === 'todo' && <ul>
            {ctx.todoTasks.length !== 0 ? ctx.todoTasks.map((taskItem) => (
              <TextCard key={taskItem.id} task={taskItem} status={status} styleClass='todotask' />
            )) : <p className="statuscard__empty">No tasks are present, add new task...</p>}
          </ul>}

          {status === 'completed' && <ul>
            {ctx.completedTasks.length !== 0 ? ctx.completedTasks.map((taskItem) => (
              <TextCard key={taskItem.id} task={taskItem} status={status} styleClass='completedtask' />
            )) : <p className="statuscard__empty">No task is found...</p>}
          </ul>}

      </div>
    </>
  );
};

export default StatusCard;
