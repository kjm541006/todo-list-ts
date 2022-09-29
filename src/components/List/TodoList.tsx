import React from "react";
import { TodoType } from "../../App";
import TodoItem from "../ListItem/TodoItem";
import classes from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoType[];
}

const TodoList = (props: TodoListProps) => {
  return (
    <section>
      <ol className={classes.orderedList}>
        {props.todos.map((item) => (
          <TodoItem key={item.id} text={item.text} isChecked={item.isChecked} />
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
