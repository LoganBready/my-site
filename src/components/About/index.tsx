import Image from 'next/image'
import eightBitLogan from '../../../public/images/8-bit-logan.png'
import clearLogan from '../../../public/images/clear-logan.png'
import styles from './About.module.scss'
import { useState } from 'react'

export const About = () => {
  const [imageSrc, setImageSrc] = useState(eightBitLogan)

  return (
    <div className={styles.aboutContainer}>
      <div
        className={styles.headShotContainer}
        onMouseOver={() => setImageSrc(clearLogan)}
        onMouseOut={() => setImageSrc(eightBitLogan)}
      >
        <Image src={imageSrc} alt="8-bit-logan" height="250" width="250" />
      </div>
      <div className={styles.aboutInformation}>
        <h1 className={styles.heading}>Logan Bready</h1>
        <h3 className={styles.title}>Full Stack Engineer</h3>
      </div>
      <div className={styles.aboutMe}>
        <p>
          I&apos;m a passionate Full-Stack developer who loves creating awesome
          digital experiences. With my skills in JavaScript / TypeScript, CSS /
          HTML, and React I&apos;ve delivered seamless user experiences while
          keeping business needs in mind. I&apos;m all about optimizing
          workflows and boosting productivity. I&apos;m a go-getter, always up
          for new challenges, and I love using my tech and leadership know-how
          to rock projects for clients and users. Let&apos;s connect and make
          something awesome together!
        </p>
      </div>
    </div>
  )
}
