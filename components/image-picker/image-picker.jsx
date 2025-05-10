"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const inputField = useRef(null);
  const [imgPreview, setImagePreview] = useState();
  function handleClick() {
    inputField.current.click();
  }

  function handleImageChange(e) {
    const img = e.target.files[0];
    if (!img) {
      setImagePreview(null);
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      setImagePreview(reader.result);
    };
  }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!imgPreview && <p>No image uploaded</p>}
            {imgPreview && (
              <Image fill src={imgPreview} className={classes.preview} />
            )}
          </div>
          <input
            className={classes.input}
            name={name}
            id={name}
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={inputField}
            onChange={handleImageChange}
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
