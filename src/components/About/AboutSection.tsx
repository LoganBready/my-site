import Image from 'next/image';
import { ProgrammingIcons } from '../ProgrammingIcons/ProgrammingIcons';
import styles from './AboutSection.module.scss';

export const AboutSection = () => {
    return (
      <section className={styles.About} id="About">
        <div className={styles.Wrapper}>
          <div className={styles.AboutSection}>
            <div className={styles.AboutText}>
              <h1>About</h1>
              <div className={styles.Bar}></div>
            </div>
            <div className={styles.ContentContainer}>
              <div className={styles.Left}>
                <Image className={styles.ProfilePic} height={256} width={256} src="/images/profile.jpg" alt="profile picture" />
                <p>Social worker turned web developer.  Consistently learning and committed to never being satisfied with my level of web development knowledge.</p>
                <p>When I&apos;m not building the web, I&apos;m spending time with my wife, son, and dog!  I also enjoy playing video games and fly fishing.</p>
              </div>
              <div className={styles.Right}>
                <div className={styles.Column}>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='html' />
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='scss' />
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='css' />
                  </div>
                </div>
                <div className={styles.Column}>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='react' />
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='typescript' />
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='javascript' />
                  </div>
                  <div className={styles.IconContainer}>
                    <ProgrammingIcons tech='next' />
                  </div>
                </div>
                <div className={styles.Column}>
                  <div className={styles.IconContainer}>
                      <ProgrammingIcons tech='node' />
                  </div>
                  <div className={styles.IconContainer}>
                      <ProgrammingIcons tech='express' />
                  </div>
                  <div className={styles.IconContainer}>
                      <ProgrammingIcons tech='postgresql' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    )
}