import { useEffect, useState } from "react";

export const DeleteTodoView = () => {
  const [deleteTodo, setDeleteTodo] = useState([]);

  const deleteHandler = async (id) => {
    await fetch(`http://localhost:3000/delete-todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setDeleteTodo(data));
  };

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => setDeleteTodo(data));
  }, []);

  return (
    <section className="delete-todo-list">
      <main className="delete-todo-list-main">
        <div className="delete-todo-list-div">
          <ul className="delete-todo-list-ul">
            {deleteTodo.map((todo, index) => (
              <li className="todo-list-li" key={index}>
                <span className="todo-list-span">{todo.name}</span>
                <span className="todo-list-span">{todo.author}</span>
                <span className="todo-list-span">{todo.timestamp}</span>
                <span className="todo-list-span">
                  {todo.isChecked ? "checked" : "not checked"}
                </span>
                <button onClick={() => deleteHandler(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};
