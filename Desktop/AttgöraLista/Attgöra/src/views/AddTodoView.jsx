import { useState } from "react";

export const AddTodoView = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [timestamp, setTimestamp] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      name: name,
      author,
      timestamp,
      isChecked,
    };

    await fetch("http://localhost:3000/add-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
  };

  return (
    <section className="todo-form">
      <main className="todo-form-main">
        <div className="todo-form-div">
          <form className="todo-form-form" onSubmit={handleOnSubmit}>
            <label className="todo-form-label">Todo</label>
            <input
              className="todo-form-input"
              type="text"
              placeholder="Todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="todo-form-label">Author</label>
            <input
              className="todo-form-input"
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label className="todo-form-label">Timestamp</label>
            <input
              className="todo-form-input"
              type="text"
              placeholder="Timestamp"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
            />
            <label className="todo-form-label">Check</label>
            <input
              className="todo-form-checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <button className="todo-form-button" type="submit">
              Add Todo
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};
