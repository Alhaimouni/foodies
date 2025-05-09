import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";
import LoadingPage from "./loading-canceled";

export async function GetMeals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Amazing meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorate.</p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share to your friends my man :D</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<LoadingPage />}>
          <GetMeals />
        </Suspense>
      </main>
    </>
  );
}
