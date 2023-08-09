import Image from "next/image"
import eightBitLogan from '../../../public/images/8-bit-logan.png'
import clearLogan from '../../../public/images/clear-logan.png'
import styles from './About.module.scss'
import { Links } from "../Links"
import { linksData } from "../Links/links.constants"
import { useState } from "react"

export const About = () => {
    const [imageSrc, setImageSrc] = useState(eightBitLogan);

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.headShotContainer} 
                onMouseOver={() => setImageSrc(clearLogan)} // Switch image source on mouse over
                onMouseOut={() => setImageSrc(eightBitLogan)}
            >
                <Image src={imageSrc} alt="8-bit-logan"  height="250" width="250" />
            </div>
            <div className={styles.aboutInformation}>
                <h1>Logan Bready</h1>
                <h3>Front-End Engineer</h3>
            </div>
            <div className={styles.linksContainer}>
                <Links linksData={linksData} />
            </div>
        </div>
    )
}