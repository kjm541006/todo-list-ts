import React, { ChangeEvent, FormEvent } from "react";
import { IoMdAdd } from "react-icons/io";
import classes from "./TodoInput.module.css";

interface TodoInputProps {
  text: string;
  onTextChange: (text: string) => void;
  onSubmit: () => void;
}

const TodoInput = (props: TodoInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onTextChange(e.target.value);
    console.log(e.target.value);
  };

  const handleInputSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <section className={classes.container}>
      <form className={classes.formContainer} onSubmit={handleInputSubmit}>
        <input
          className={classes.input}
          placeholder={"할 일 입력"}
          value={props.text}
          onChange={handleInputChange}
        />
        <button type="submit" className={classes.add}>
          <IoMdAdd />
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
