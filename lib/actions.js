//Server action file all these functions now are exceuted on server not client

"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidInput(input) {
  if (!input || input.trim() === "") {
    return 1;
  }
}

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  if (
    isInvalidInput(meal.title) ||
    isInvalidInput(meal.summary) ||
    isInvalidInput(meal.instructions) ||
    isInvalidInput(meal.creator) ||
    isInvalidInput(meal.creator_email)
  ) {
    throw new Error("invalid user input ");
  }

  await saveMeal(meal);
  redirect("/meals");
}
