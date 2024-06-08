import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <footer id='#Contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
               <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon'/>
               <a href="mailto:sanketrinayat17@gmail.com">sanketrinayat17@gmail.com</a> 
            </li>
            <li className={styles.link}>
               <img src={getImageUrl("contact/githubIcon.png")} alt='Github Icon'/>
               <a href="https://github.com/Sanket176/">Sanket176</a> 
            </li>
            <li className={styles.link}>
               <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon'/>
               <a href="https://www.linkedin.com/in/sanket-rinayat-b253bb211/">Sanket Rinayat</a> 
            </li>
        </ul>
    </footer>
  )
}

export default Contact