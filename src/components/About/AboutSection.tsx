import Image from 'next/image';
import { ProgrammingIcons } from '../svg/ProgrammingIcons';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
    return (
        <div className={styles.AboutSection}>
            <div className={styles.AboutText}>
              <h1>About</h1>
              <div className={styles.Bar}></div>
            </div>
            <div className={styles.ContentContainer}>
              <div className={styles.Left}>
                <Image className={styles.ProfilePic} height={256} width={256} src="/images/profile.jpg" alt="profile picture" />
                <p>Fully committed to continuing to learn and never being satisfied with my level of web development knowledge.  I'm primarily a front-end engineer who focuses on typescript and react.</p>
                <p>When I'm not building the web, I'm spending time with my wife, son, and dog!  I also enjoy playing video games and fly fishing.</p>
              </div>
              <div className={styles.Right}>
                <ProgrammingIcons tech='react' />
              </div>
            </div>
        </div>
    )
}