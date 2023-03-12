import React from "react";

const Footer = ({todos}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
