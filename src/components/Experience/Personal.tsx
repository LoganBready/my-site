import Link from 'next/link'
import styles from './Personal.module.scss'

interface PersonalProps {
  title: string
  id: number
  description: string
  githubLink: string
  demoLink?: string
  publishedLink?: string
  skills: {
    title: string
  }[]
  image: string
}

export const Personal = ({
  title,
  id,
  description,
  githubLink,
  demoLink,
  publishedLink,
  skills,
  image,
}: PersonalProps) => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.terminalMenu}>
        <div
          className={`${styles.terminalClose} ${styles.terminalButton}`}
        ></div>
        <div
          className={`${styles.terminalMinimize} ${styles.terminalButton}`}
        ></div>
        <div
          className={`${styles.terminalOpen} ${styles.terminalButton}`}
        ></div>
      </div>
      <div className={styles.terminalScreen}>
        <div className={styles.imageContainer}>
          {/* <Link href={link.href}>
                        <Image src={link.image} alt={companyName} />
                    </Link> */}
        </div>
        <div className={styles.informationContainer}>
          <h3 className={styles.company}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.skillsContainer}>
          <ul>
            {skills.map((skill, index: number) => (
              <li key={index} className={styles.skills}>
                {skill.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
