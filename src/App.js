import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AppBoddy from "./components/AppBoddy";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todo) => {
    const newTodoList = todos.filter((t) => t.content !== todo.content);
    setTodos([...newTodoList]);
  };

  const checkTodo = (todo) => {
    const newTodoList = todos.filter((t) => {
      if( t.content === todo.content ) {
        t.done = !todo.done;
        return [ ...todos ]
      } else {
        return t
      }
    })

    setTodos([...newTodoList]);
  }


  return (
    <section className="todoapp">
      <Header todoValue={addNewTodo} todos={todos} />
      {todos.length !== 0 && (
        <AppBoddy todos={todos} deletedTodo={deleteTodo} checkedTodo={checkTodo} />
      )}
      {todos.length !== 0 && <Footer todos={todos} />}
    </section>
  );
}

export default App;
