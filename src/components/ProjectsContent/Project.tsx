//styles
import styles from './ProjectsContent.module.scss';
//interface
interface ProjectProps {
    position: number;
    title: string;
    link: string;
    linkTitle: string;
    description: string;
    image: string;
    tech: string[];
}

export const Project = ({ position, title, link, description, image, tech, linkTitle }: ProjectProps) => {
    return (
        <div className={`${position === 1 && styles.Reverse} ${styles.ProjectItem}`}>
            {position === 1 ? (
                <>
                    <div className={styles.ImageContainer}>
                        <img src={image} alt="Project Image" className={styles.ProjectImage} />
                    </div>
                    <div className={`${styles.TextContainer} ${styles.Margin} ${styles.PaddingRight}`}>
                        <a href={link} target="_blank" rel="noreferrer" className={styles.Link}>{linkTitle}</a>
                        <h2 className={styles.Title}>{title}</h2>
                        <p className={styles.Description}>{description}</p>
                        <div className={styles.TechContainer}>
                            {tech.map((tech, index) => (
                                <div key={index} className={styles.TechItem}>
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.TextContainer}>
                        <a href={link} target="_blank" rel="noreferrer" className={styles.Link}>{linkTitle}</a>
                        <h2 className={styles.Title}>{title}</h2>
                        <p className={styles.Description}>{description}</p>
                        <div className={styles.TechContainer}>
                            {tech.map((tech, index) => (
                                <div key={index} className={styles.TechItem}>
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.ImageContainer} ${styles.Margin}`}>
                        <img src={image} alt="Project Image" className={styles.ProjectImage}/>
                    </div>
                </>
            )}
        </div>
    )
}