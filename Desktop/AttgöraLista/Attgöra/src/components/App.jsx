import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
