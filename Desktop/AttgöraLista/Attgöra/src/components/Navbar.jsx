import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section className="navbar-section">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-listItem">
            <Link to="/"> TodoList </Link>
          </li>
          <li className="navbar-listItem">
            <Link to="/add-todo"> AddTodo </Link>
          </li>
          <li className="navbar-listItem">
            <Link to="/edit-todo"> EditTodo </Link>
          </li>
          <li className="navbar-listItem">
            <Link to="/delete-todo"> DeleteTodo </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
