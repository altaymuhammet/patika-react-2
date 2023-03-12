import React from "react";

const AppBoddy = ({ todos, deletedTodo, checkedTodo }) => {

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map((todo, index) => {
          return (
            <li key={index} className="list-item">
              <div className="view">
                <input className="toggle" type="checkbox" onChange={(e) => checkedTodo(todo)} />
                <p
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {todo.content}
                </p>
                <button className="destroy" onClick={() => deletedTodo(todo)}></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AppBoddy;
