import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import classes from "./TodoItem.module.css";

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
  onCheckClick: (id: number) => void;
  onRemoveClick: (id: number) => void;
}

const TodoItem = (props: TodoItemProps) => {
  const handleCheckClick = () => {
    props.onCheckClick(props.id);
  };
  const handleRemoveClick = () => {
    props.onRemoveClick(props.id);
  };
  return (
    <li className={classes.list}>
      <BsCheckCircle
        className={`${props.isChecked ? classes.checked : classes.unChecked} ${classes.checkIcon}`}
        onClick={handleCheckClick}
      />
      <span className={`${props.isChecked ? classes.strikethrough : ""}`}>{props.text}</span>
      <IoIosRemoveCircleOutline className={classes.removeIcon} onClick={handleRemoveClick} />
    </li>
  );
};

export default TodoItem;
