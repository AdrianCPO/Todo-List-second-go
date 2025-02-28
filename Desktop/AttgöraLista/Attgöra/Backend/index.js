import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const db = new Database("../ToDoo.db");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const stmt = db.prepare("SELECT * FROM ToDooList ORDER BY timestamp ASC");
  const alla = stmt.all();
  res.json(alla);
});

app.post("/add-todo", async (req, res) => {
  const todoItem = req.body;
  await db
    .prepare(
      "INSERT INTO ToDooList (name, author, timestamp, isChecked) VALUES (?, ?, ?, ?)"
    )
    .run(
      todoItem.name,
      todoItem.author,
      todoItem.timestamp,
      (todoItem.isChecked = todoItem.isChecked ? 1 : 0)
    );
  const todos = await db.prepare("SELECT * FROM ToDooList").all();
  res.send(todos);
});

app.put("/edit-todo/:id", async (req, res) => {
  const todoItem = req.body;
  const id = req.params.id;
  const isChecked = todoItem.isChecked ? 1 : 0;
  await db
    .prepare(
      "UPDATE ToDooList SET name = ?, author = ?, timestamp = ?, isChecked = ? WHERE id = ?"
    )
    .run(todoItem.name, todoItem.author, todoItem.timestamp, isChecked, id);
  const todos = await db.prepare("SELECT * FROM ToDooList").all();
  res.send(todos);
});

app.delete("/delete-todo/:id", async (req, res) => {
  const id = req.params.id;
  await db.prepare("DELETE FROM ToDooList WHERE id = ?").run(id);
  const todos = await db.prepare("SELECT * FROM ToDooList").all();
  res.send(todos);
});

app.listen(3000, () => {
  console.log("Denna kanalen lyssnar på port 3000");
});
