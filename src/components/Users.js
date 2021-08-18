import React from 'react';
import User from './User';

const todos = ({ user, todos }) => {
  return todos.map(todo => (
    <User todo={todo.id} user={user} />
  ))
}

export default todos