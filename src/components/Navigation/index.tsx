import Link from 'next/link'
import { LinkedIn } from '../Icons/LinkedIn'
import { Resume } from '../Icons/Resume'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import styles from './Navigation.module.scss'
import useScreenSize from '../../hooks/useWindowSize'

export const Navigation = () => {
  const { width } = useScreenSize()
  const isMobile = width < 500
  return (
    <div className={styles.navigation}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link
              href="https://www.linkedin.com/in/logan-bready/"
              target="_blank"
              data-tooltip-id="linkedIn"
              data-tooltip-content="Say hello on linkedIn!"
            >
              <LinkedIn
                className={styles.icon}
                height={44}
                width={44}
                color="#ABB2BF"
              />
            </Link>
            {!isMobile && (
              <Tooltip
                id="linkedIn"
                place="bottom"
                className={styles.toolTip}
              />
            )}
          </li>
          <li>
            <Link
              href="https://docs.google.com/document/d/1lltNqrKnAApELmS2Eejs02SrOa73_HfZGcxwQ3ONHjY/edit?usp=sharing"
              target="_blank"
              data-tooltip-id="Resume"
              data-tooltip-content="Check out my resume"
            >
              <Resume
                className={styles.icon}
                height={44}
                width={44}
                color="#ABB2BF"
              />
            </Link>
            {!isMobile && (
              <Tooltip id="Resume" place="bottom" className={styles.toolTip} />
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}
