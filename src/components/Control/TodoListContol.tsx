import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";

import classes from "./TodoListControl.module.css";

const TodoListContol = () => {
  return (
    <section className={classes.control}>
      <button className={`${classes.button} ${classes.checkAllIcon}`}>
        <FiCheckCircle className={classes.icon} /> 전체완료
      </button>
      <button className={`${classes.button} ${classes.deleteAllIcon}`}>
        <FaTrash className={classes.icon} /> 전체삭제
      </button>
    </section>
  );
};

export default TodoListContol;
