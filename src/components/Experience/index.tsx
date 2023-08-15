import { Personal } from './Personal'
import { Professional } from './Professional'
import {
  professionalExperienceData,
  personalExperienceData,
} from './experience.constants'
import styles from './Experience.module.scss'

export const Experience = () => {
  console.log(professionalExperienceData.length)
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.professionalExperienceContainer}>
        <h3 className={styles.title}>Professional Experience:</h3>
        {professionalExperienceData.map((experience) => (
          <Professional
            key={experience.id}
            companyName={experience.companyName}
            id={experience.id}
            dates={experience.dates}
            title={experience.title}
            description={experience.description}
            skills={experience.skills}
            link={experience.link}
          />
        ))}
      </div>
      <div className={styles.personalExperienceContainer}>
        <h3 className={styles.title}>Personal Experience:</h3>
        {personalExperienceData.map((experience) => (
          <Personal
            key={experience.id}
            id={experience.id}
            title={experience.title}
            description={experience.description}
            skills={experience.skills}
            githubLink=""
            publishedLink=""
            demoLink=""
            image=""
          />
        ))}
      </div>
    </div>
  )
}
