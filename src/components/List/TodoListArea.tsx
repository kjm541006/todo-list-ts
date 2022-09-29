import React, { ReactNode } from "react";

interface TodoListAreaProps {
  children: ReactNode;
  todoLen: number;
}

const TodoListArea = (props: TodoListAreaProps) => {
  if (props.todoLen < 1) {
    return null;
  }
  return <>{props.children}</>;
};

export default TodoListArea;
