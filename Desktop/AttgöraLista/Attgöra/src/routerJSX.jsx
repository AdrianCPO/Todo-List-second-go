import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { App } from "./components/App";
import { TodoListView } from "./views/TodoListView";
import { EditTodoView } from "./views/EditTodoView";
import { AddTodoView } from "./views/AddTodoView";
import { DeleteTodoView } from "./views/DeleteTodoView";

export const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<TodoListView />} index />
      <Route element={<AddTodoView />} path="add-todo" />
      <Route element={<EditTodoView />} path="edit-todo" />
      <Route element={<DeleteTodoView />} path="delete-todo" />
      <Route
        element={
          <section>
            <h1>404page</h1>
          </section>
        }
        path="*"
      />
    </Route>
  )
);
