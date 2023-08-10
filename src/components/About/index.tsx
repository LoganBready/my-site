import Image from 'next/image'
import eightBitLogan from '../../../public/images/8-bit-logan.png'
import clearLogan from '../../../public/images/clear-logan.png'
import styles from './About.module.scss'
import { Links } from '../Links'
import { linksData } from '../Links/links.constants'
import { useState } from 'react'

export const About = () => {
  const [imageSrc, setImageSrc] = useState(eightBitLogan)

  return (
    <div className={styles.aboutContainer}>
      <div
        className={styles.headShotContainer}
        onMouseOver={() => setImageSrc(clearLogan)} // Switch image source on mouse over
        onMouseOut={() => setImageSrc(eightBitLogan)}
      >
        <Image src={imageSrc} alt="8-bit-logan" height="250" width="250" />
      </div>
      <div className={styles.aboutInformation}>
        <h1 className={styles.heading}>Logan Bready</h1>
        <h3 className={styles.title}>Front-End Engineer</h3>
      </div>
      <div className={styles.linksContainer}>
        <Links linksData={linksData} />
      </div>
      <div className={styles.aboutMe}>
        <p>
          I'm a passionate front-end developer who loves creating awesome
          digital experiences. With my skills in JavaScript/TypeScript,
          CSS/HTML, and React I've delivered seamless user experiences while
          keeping business needs in mind. I'm all about optimizing workflows and
          boosting productivity. I'm a go-getter, always up for new challenges,
          and I love using my tech and leadership know-how to rock projects for
          clients and users. Let's connect and make something awesome together!
        </p>
      </div>
    </div>
  )
}
