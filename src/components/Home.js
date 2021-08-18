import { useEffect, useState } from "react";
import "./Home.css";
import SearchIcon from '@material-ui/icons/Search';
import Todos from './todos';
import axios from 'axios';

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTodo, setSearchTodo] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (e) => {
    setSearchTodo(e.target.value);
    if (searchTodo !== "") {
      const newTodoList = todos.filter((todo) => {
        return todo.title
          .toLowerCase()
          .includes(searchTodo.toLowerCase());
      });
      setSearchResults(newTodoList);
    } else {
      setSearchResults(todos);
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setLoading(false);
      setTodos(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="home">
      <div className="header">
        <div className="title">
          <h1>Todos</h1>
        </div>
        <div className="searchBar">
          <div className="searchBar_icon">
            <SearchIcon />
          </div>
          <div className="searchBar_title">
            <input type="text" style={{ border: "none" }} placeholder="Search..." onChange={searchHandler} value={searchTodo} />
          </div>
        </div>
      </div>

      <div className="todoList">
        <div className="todo">ToDo ID</div>
        <div className="todo">Title</div>
        <div className="todo">Status</div>
        <div className="todo">Action</div>
      </div>
      {loading ?
        <p>Loading...</p> :
        <>
          <Todos todos={searchTodo.length < 1 ? todos : searchResults} />
        </>
      }
    </div>
  );
}

export default Home;
