import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import classes from "./TodoItem.module.css";

interface TodoItemProps {
  text: string;
  isChecked: boolean;
}

const TodoItem = (props: TodoItemProps) => {
  return (
    <li className={classes.list}>
      <BsCheckCircle
        className={`${props.isChecked ? classes.checked : classes.unChecked} ${classes.checkIcon}`}
      />
      <span>{props.text}</span>
      <IoIosRemoveCircleOutline className={classes.removeIcon} />
    </li>
  );
};

export default TodoItem;
