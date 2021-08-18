import React from 'react';
import "./Todo.css";
import { Link } from 'react-router-dom';

const Todo = ({ todo }) => {
  return (
    <div className="todoDetails">
      <div className="todo"><p>{todo.id}</p></div>
      <div className="todo"><p>{todo.title}</p></div>
      <div className="todo"><p>{todo.completed !== false ? 'Completd' : 'Icompleted'}</p></div>
      <div className="todo">
        <div className="todoButton">
          <Link to="/user_details">View user</Link>
        </div>
      </div>
    </div>
  )
}

export default Todo
