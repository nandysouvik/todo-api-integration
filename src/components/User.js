import React from 'react';
import "./User.css";

const Todo = ({ todo, user }) => {
  return (
    <div className="userDetails">
      <div className="user"><p>{todo.id === user.id ? todo.id : ''}</p></div>
      <div className="user"><p>{todo.id === user.id ? todo.title : ''}</p></div>
      <div className="user"><p>{todo.id === user.id ? user.id : ''}</p></div>
      <div className="user"><p>{todo.id === user.id ? user.name : ''}</p></div>
      <div className="user"><p>{todo.id === user.id ? user.email : ''}</p></div>

    </div>
  )
}

export default Todo