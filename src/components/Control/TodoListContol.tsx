import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

import classes from "./TodoListControl.module.css";

interface TodoListControlProps {
  onCheckAll: () => void;
  onRemoveAll: () => void;
}

const TodoListContol = (props: TodoListControlProps) => {
  return (
    <section className={classes.control}>
      <button className={`${classes.button} ${classes.checkAllIcon}`} onClick={props.onCheckAll}>
        <FiCheckCircle className={classes.icon} /> 전체완료
      </button>
      <button className={`${classes.button} ${classes.deleteAllIcon}`} onClick={props.onRemoveAll}>
        <FaTrash className={classes.icon} /> 전체삭제
      </button>
    </section>
  );
};

export default TodoListContol;
