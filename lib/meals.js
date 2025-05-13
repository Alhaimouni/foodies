import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((res) => {
    setTimeout(res, 2000);
  });
  // throw new Error("This is a custom error");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const imageExtension = meal.image.name.split(".").pop();
  console.log(imageExtension);

  const fileName = `${meal.slug}.${imageExtension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(
    Buffer.from(bufferedImage, (err) => {
      if (err) {
        throw new Error("Saving image failed: " + err);
      }
    })
  );

  meal.image = `/images/${fileName}`;
  db.prepare(
    `
      INSERT INTO meals
        (title,summary,instructions,creator,creator_email, image,slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
  ).run(meal);
}
