import { useEffect, useState } from "react";

export const EditTodoView = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [timestamp, setTimestamp] = useState(new Date());
  const [isChecked, setIsChecked] = useState("false");
  const [id, setId] = useState("");
  const [todo, setTodo] = useState([]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTodo = {
      name,
      author,
      timestamp,
      isChecked,
    };
    await fetch(`http://localhost:3000/edit-todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
  };

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(`http://localhost:3000/`);
      const data = await response.json();
      setTodo(data);
    };
    fetchTodo();
  }, []);

  const handleSelectChange = (todo) => {
    setName(todo.name);
    setAuthor(todo.author);
    setTimestamp(new Date(todo.timestamp));
    setIsChecked(todo.isChecked);
    setId(todo.id);
  };

  return (
    <section className="edit-todo-section">
      <main className="edit-todo-main">
        <div className="edit-form-div">
          <h2 className="edit-todo-h2">Edit Todo</h2>
          {todo && todo.length > 0 ? (
            <ul className="edit-todo-ul">
              {todo.map((todo) => (
                <li key={todo.id}>
                  <span className="edit-todo-span">{todo.name}</span>
                  <span className="edit-todo-span">{todo.author}</span>
                  <span className="edit-todo-span">{todo.timestamp}</span>
                  <span className="edit-todo-span">{todo.isChecked}</span>
                  <button onClick={() => handleSelectChange(todo)}>
                    Select
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No todos found</p>
          )}
          <form className="edit-todo-form" onSubmit={handleUpdate}>
            <label className="edit-todo-label">Todo</label>
            <input
              className="edit-todo-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="edit-todo-label">Author</label>
            <input
              className="edit-todo-input"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label className="edit-todo-label">Timestamp</label>
            <input
              className="edit-todo-input"
              type="datetime-local"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
            />
            <label className="edit-todo-label">Check</label>
            <input
              className="edit-todo-input"
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <button className="edit-todo-button" type="submit">
              Update
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};
