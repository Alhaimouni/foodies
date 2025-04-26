import logoImage from "@/public/images/logo.png";
import Link from "next/link";

function MainHeader() {
  return(
    <div style={{display:'flex',justifyContent:"flex-start",alignItems:"center"}}>
        <img  style={{width:'100px'}} src={logoImage.src} alt="this is the logo image." />
        <ul style={{fontWeight:"bolder",display:"flex",gap:"35px",listStyleType:"none"}}>
          <li >
          <Link href={"/"}>Home</Link>
          </li>
          <li>
          <Link href={"/meals"}>meals</Link>
          </li>
          <li>
          <Link href={"/meals/share"}>share</Link>
          </li>
          <li>
          <Link href={"/meals/2"}>meals 2</Link>
          </li>
          <li>
          <Link href={"/community"}>community</Link>
          </li>
        </ul>
    </div>
  );
}

export default MainHeader;
