import React, { useState } from "react";

const Header = ({ todoValue, todos, checkAllTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    todoValue({
        content: inputValue,
        done: false
    });
    setInputValue("")
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitHandler} className="header-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={inputValue}
          onChange={changeHandler}
        />
      </form>
    </header>
  );
};

export default Header;
