//Server action file all these functions now are exceuted on server not client


"use server";


export async function shareMeal(formData) {

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  console.log(meal);
}
