import React from "react";
import { TodoType } from "../../App";
import TodoItem from "../ListItem/TodoItem";
import classes from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoType[];
  onCheckClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <section>
      <ol className={classes.orderedList}>
        {props.todos.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            isChecked={item.isChecked}
            onCheckClick={props.onCheckClick}
            onRemoveClick={props.onRemoveClick}
            id={item.id}
          />
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
