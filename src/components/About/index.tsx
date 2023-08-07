import Image from "next/image"
import headShot from '../../../public/images/8-bit-logan.png'
import styles from './About.module.scss'
import { Links } from "../Links"
import { linksData } from "../Links/links.constants"

export const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.headShotContainer}>
                <Image src={headShot} alt="8-bit-logan"  height="250" width="250" />
            </div>
            <div className={styles.aboutInformation}>
                <h1>Logan Bready</h1>
                <h3>Front-End Engineer</h3>
            </div>
            <Links linksData={linksData} />
        </div>
    )
}