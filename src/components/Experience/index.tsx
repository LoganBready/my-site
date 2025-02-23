import { Professional } from './Professional'
import { professionalExperienceData } from './experience.constants'
import styles from './Experience.module.scss'

export const Experience = () => {
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
    </div>
  )
}
