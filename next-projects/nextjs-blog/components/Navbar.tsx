import Link from "next/link"
import styles  from "./Navbar.module.css";

export const Navbar = () => {
    return(
        <>
         <nav className={styles['menu-container']}>
             <Link href="/home"> <a>Home</a></Link>
             <Link href="/about"><a>About</a></Link>
             <Link href="/contact"><a>Contact</a></Link>
         </nav>
        </>
    )
}