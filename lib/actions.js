//Server action file all these functions now are exceuted on server not client

"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidInput(input) {
  if (!input || input.trim() === "") {
    return 1;
  }
}

export async function shareMeal(prevState, formData) {
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
    // throw new Error("invalid user input ");

    //should be serilized object only
    return {
      errMsg: "invalid user input",
    };
  }

  await saveMeal(meal);

  // revalidatePath used to ignore the cached page "meals" and its all nested routes once we added a new meal
  //revalidatePath("/meals", "layout");
  // revalidatePath used to ignore the cached page "meals" only once we added a new meal
  revalidatePath("/meals", "page");
  redirect("/meals");
}
