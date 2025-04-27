import logoImage from "@/public/images/logo.png";
import Link from "next/link";
import HeaderBackground from "./header-background";
import classes from "./main-header.module.css";
import Image from "next/image";

function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <div className={classes.header}>
        <div className={classes.logo}>
          <Link href={"/"}>
            <Image
              src={logoImage}
              alt="this is the logo image."
              priority
            />
          </Link>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainHeader;
