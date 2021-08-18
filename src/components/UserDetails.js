import React, { useEffect, useState } from 'react';
import "./UserDetails.css"
import axios from 'axios';
import Users from './Users';

function User() {

  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="user">
      <h1>User Details</h1>
      <div className="userList">
        <div className="user">ToDo ID</div>
        <div className="user">ToDo Title</div>
        <div className="user">UserId</div>
        <div className="user">Name</div>
        <div className="user">Email</div>
      </div>
      {users.map((user) => {
        <Users user={user} todos={todos} />
      })}
    </div>
  )
}

export default User
