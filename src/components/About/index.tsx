import Image from 'next/image'
import clearLogan from '../../../public/images/clear-logan.png'
import styles from './About.module.scss'

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.headShotContainer}>
        <Image src={clearLogan} alt="8-bit-logan" height="250" width="250" />
      </div>
      <div className={styles.aboutInformation}>
        <h1 className={styles.heading}>Logan Bready</h1>
        <h3 className={styles.title}>Full Stack Engineer</h3>
      </div>
      <div className={styles.aboutMe}>
        <p>
          Hi there! I&apos;m a passionate full stack engineer with a flair for
          crafting dynamic and user-centric web applications. My journey in the
          tech realm has revolved around harnessing the power of React,
          TypeScript/JavaScript, HTML, CSS, Express, and Node.js. I thrive on
          the creative synergy between design and functionality, and I love
          transforming innovative ideas into robust, seamless digital
          experiences. From building intuitive front-end interfaces to
          architecting efficient back-end systems, I&apos;m committed to
          delivering solutions that strike the perfect balance between
          aesthetics and performance.
        </p>
      </div>
    </div>
  )
}
