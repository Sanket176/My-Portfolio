import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>

        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt='Me Sitting with my Laptop' className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Img"/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with Experience in building responsive and optimised sites</p>
                    </div>
                </li>
                {/* <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Cursor Img"/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a frontend developer with Experience in building responsive and optimised sites</p>
                    </div>
                </li> */}
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Cursor Img"/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Developer</h3>
                        <p>I'm a frontend developer with Experience in building responsive and optimised sites</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

  )
}

export default About