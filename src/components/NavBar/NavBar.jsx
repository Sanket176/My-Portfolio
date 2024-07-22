import React,{useState} from 'react'
import styles from "./NavBar.module.css"
import { getImageUrl } from '../../utils'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    //semantic tags is just like div tag, but has spl name which let know browser what its function is
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={menuOpen 
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                    }
                alt='menu-button'
                onClick={()=> setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar