"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const inputField = useRef(null);

  function handleClick() {
    inputField.current.click();
    console.log("ali");
  }
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <input
            className={classes.input}
            name={name}
            id={name}
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={inputField}
          />
          <button
            type="button"
            className={classes.button}
            onClick={handleClick}
          >
            Click Me Harder
          </button>
        </div>
      </div>
    </>
  );
}
