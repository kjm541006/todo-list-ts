import React from "react";
import classes from "./TodoHeader.module.css";

const TodoHeader = () => {
  return (
    <header>
      <h1 className={classes.headerTitle}>
        <mark className={classes.todoCount}>5</mark>
        개의 할 일
      </h1>
    </header>
  );
};

export default TodoHeader;
