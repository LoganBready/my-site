import Link from 'next/link';
import styles from './Personal.module.scss';

interface PersonalProps {
    title: string;
    id: number;
    description: string;
    githubLink: string;
    demoLink?: string;
    publishedLink?: string;
    skills: {
        title: string;
    }[]
    image: string;
}

export const Personal = ({ title, id, description, githubLink, demoLink, publishedLink, skills, image }: PersonalProps) => {
    return (
        <div className={styles.experienceContainer}>
            <div className={styles.imageContainer}>
                {/* <Link href={link.href}>
                    <Image src={link.image} alt={companyName} />
                </Link> */}
            </div>
            <div className={styles.informationContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.skillsContainer}>
                <ul>
                    {skills.map((skill, index: number) => (
                        <li key={index}>{skill.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}