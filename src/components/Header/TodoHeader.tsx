import React from "react";
import classes from "./TodoHeader.module.css";

interface TodoHeaderProps {
  todoLen: number;
}

const TodoHeader = (props: TodoHeaderProps) => {
  return (
    <header>
      <h1 className={classes.headerTitle}>
        <mark className={classes.todoCount}>{props.todoLen}</mark>
        개의 할 일
      </h1>
    </header>
  );
};

export default TodoHeader;
