import MealItem from "@/components/meals/meal-item";

export default function mealsGrid({ meal }) {
  return (
    <ul className={classes.meals}>
      {MealsPage.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
