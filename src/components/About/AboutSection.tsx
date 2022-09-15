import Image from 'next/image';
import { ProgrammingIcons } from '../ProgrammingIcons/ProgrammingIcons';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
    return (
        <div className={styles.Wrapper}>
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
                <div className={styles.Column}>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='html' />
                    <h3>HTML</h3>
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='scss' />
                    <h3>SASS</h3>
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='css' />
                    <h3>CSS</h3>
                  </div>
                </div>
                <div className={styles.Column}>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='react' />
                    <h3>React.js</h3>
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='typescript' />
                    <h3>TypeScript</h3>
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='javascript' />
                    <h3>JavaScript</h3>
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='next' />
                    <h3>Next.js</h3>
                  </div>
                </div>
                <div className={styles.Column}>
                  <div className={styles.IconContainer}>
                      <ProgrammingIcons tech='node' />
                      <h3>Node.js</h3>
                  </div>
                  <div className={styles.IconContainer}>
                      <ProgrammingIcons tech='express' />
                      <h3>Express.js</h3>
                  </div>
                  <div className={styles.IconContainer}>
                      <ProgrammingIcons tech='postgresql' />
                      <h3>PostgreSQL</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}