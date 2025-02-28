import { useState, useEffect } from "react";

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setTodoList(data);
    };

    fetchTodos();
  }, []);

  return (
    <section className="todo-list">
      <form className="todo-list-form">
        <label className="todo-list-label">Todo List</label>
        <main className="todo-list-main">
          <div className="todo-list-div">
            <ul className="todo-list-ul">
              {todoList.map((todo, index) => (
                <li className="todo-list-li" key={index}>
                  <span className="todo-list-span">{todo.name}</span>

                  <span className="todo-list-span">{todo.author}</span>
                  <span className="todo-list-span">{todo.timestamp}</span>
                  <span className="todo-list-span">
                    {todo.isChecked ? "checked" : "not checked"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </form>
    </section>
  );
};
