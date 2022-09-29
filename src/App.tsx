import React, { useState } from "react";
import "./App.css";
import TodoListContol from "./components/Control/TodoListContol";
import Divider from "./components/Divider/Divider";
import TodoHeader from "./components/Header/TodoHeader";
import TodoInput from "./components/Input/TodoInput";
import TodoList from "./components/List/TodoList";

export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
};

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleTextSubmit = () => {
    console.log("submit!!!!!!!!!!!!!!!!!!!!!!!");
    setText("");
  };

  return (
    <main className="App">
      <TodoHeader />
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleTextSubmit} />
      <TodoListContol />
      <Divider />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
