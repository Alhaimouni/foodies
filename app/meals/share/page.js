"use client";

import ImagePicker from "@/components/image-picker/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import FormSubmitButton from "@/components/form-submit-button/form-submit-button";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [formState, actionDispatcher] = useFormState(shareMeal, {
    errMsg: null,
  });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={actionDispatcher}>
          <div className={classes.row}>
            {formState.errMsg && (
              <p style={{ color: "red" }}>* {formState.errMsg}</p>
            )}
          </div>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="creator" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="creator_email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label={"Upload your meal NOW!"} name={"image"} />
          <p className={classes.actions}>
            <FormSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
