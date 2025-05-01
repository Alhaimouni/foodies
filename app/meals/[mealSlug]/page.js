"use client";
import { usePathname } from "next/navigation";

export default function Slug({ params }) {
  const path = usePathname();

  return <h1>Current Path: {params.mealSlug}</h1>;
}
