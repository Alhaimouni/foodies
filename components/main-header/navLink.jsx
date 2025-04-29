"use client"

import Link from "next/link";
import classes from "./navLink.module.css"
import { usePathname } from "next/navigation";

export default function NavLink({ children, link }) {
  const activeLink = usePathname();

  return (
    <Link
      href={link}      
      className={activeLink.startsWith(link) ? classes.active : undefined}
    >
      {children}
    </Link>
  );
}
