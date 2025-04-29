import logoImage from "@/public/images/logo.png";
import Link from "next/link";
import HeaderBackground from "./header-background";
import classes from "./main-header.module.css";
import Image from "next/image";
import NavLink from "./navLink";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <div className={classes.header}>
        <div className={classes.logo}>
          <Link href={"/"}>
            <Image src={logoImage} alt="this is the logo image." priority />
          </Link>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink link={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink link={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}