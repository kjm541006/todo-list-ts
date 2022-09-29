import React, { useState } from "react";
import "./App.css";
import TodoListContol from "./components/Control/TodoListContol";
import Divider from "./components/Divider/Divider";
import TodoHeader from "./components/Header/TodoHeader";
import TodoInput from "./components/Input/TodoInput";
import TodoList from "./components/List/TodoList";
import TodoListArea from "./components/List/TodoListArea";

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
    const newTodos = todos.concat({
      id: Date.now(),
      text: text,
      isChecked: false,
    });

    setTodos(newTodos);
    console.log("submit!!!!!!!!!!!!!!!!!!!!!!!");
    setText("");
  };

  return (
    <main className="App">
      <TodoHeader todoLen={todos.filter((todo) => !todo.isChecked).length} />
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleTextSubmit} />
      <TodoListArea todoLen={todos.length}>
        <TodoListContol />
        <Divider />
        <TodoList todos={todos} />
      </TodoListArea>
    </main>
  );
}

export default App;
