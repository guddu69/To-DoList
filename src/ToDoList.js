import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // for id
import "./ToDoList.css";

const ToDoList = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date");
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    // prevent default submiting & referesing the page automatically by browser
    e.preventDefault();
    if (text.trim()) {
      const newTodo = {
        // id: new Date().getTime().toString(),
        id: uuidv4(),
        text: text.trim(),
        completed: false,
        date: new Date(),
      };
      setTodos([...todos, newTodo]);
      setText("");
    } else {
      alert("Please enter a task.");
    }
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "pending") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sort === "name") {
      return a.text.localeCompare(b.text);
    } else if (sort === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  // show incompeleted first and compeleted last
  const orderedTodos = sortedTodos.sort((a, b) => {
    if (filter === "all") {
      return a.completed - b.completed;
    }
    return 0;
  });

  return (
    <>
      <h1>To-Do List</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          ref={refContainer}
          placeholder="Add a new task..."
          onChange={(e) => setText(e.target.value)}
        />
        <button className="icon-btn" type="submit">
          <i className="fas fa-plus"></i>
        </button>
      </form>

      <div className="buttons">
        <button className="filter-btn" onClick={() => setFilter("all")}>
          All
        </button>
        <button className="filter-btn" onClick={() => setFilter("pending")}>
          Pending
        </button>
        <button className="filter-btn" onClick={() => setFilter("completed")}>
          Completed
        </button>
        <button className="clear-btn" onClick={clearAll}>
          Clear All
        </button>
      </div>

      <div className="controls">
        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <div className="todo-list">
        {orderedTodos.map((todo) => (
          <div
            className={`item ${todo.completed ? "completed" : ""}`}
            key={todo.id}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo.id)}
            />
            <h5>{todo.text}</h5>
            <button onClick={() => removeTodo(todo.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
