import Image from 'next/image';
import styles from './Experience.module.scss';
import Link from 'next/link';

interface ProfessionalProps {
    companyName: string;
    id: number;
    dates: {
        dateStart: string;
        dateEnd?: string;
    }
    title: string;
    description: string;
    skills: {
        title: string;
    }[]
    link: {
        href:  string;
        image: string;
    }
}

export const Professional = ({ companyName, id, dates, title, description, skills, link }: ProfessionalProps) => {
    return (
        <div className={styles.professionalExperienceContainer}>
            <div className={styles.imageContainer}>
                <Link href={link.href}>
                    <Image src={link.image} alt={companyName} />
                </Link>
            </div>
            <div className={styles.informationContainer}>
                <h3>{companyName}</h3>
                <p>{title}</p>
                <p>{dates.dateStart} - {dates.dateEnd ? dates.dateEnd : 'Current'}</p>
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