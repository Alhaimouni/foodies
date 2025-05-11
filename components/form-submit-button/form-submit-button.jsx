"use client";
import { useFormStatus } from "react-dom";
import classes from "./form-submit-button.modlue.css";

export default function FormSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={classes.button} disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
