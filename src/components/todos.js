import React from 'react';
import Todo from './Todo'
import { TODO_PER_PAGE } from '../utils/constants';

const todos = ({ todos }) => {
  const startIndex = 0;
  const selectedTodos = todos.slice(startIndex, TODO_PER_PAGE);
  return selectedTodos.map(todo => (
    <Todo todo={todo} key={todo.id} />
  ))
}

export default todos
