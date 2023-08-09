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
            <div className={styles.terminalMenu}>
                <div className={`${styles.terminalClose} ${styles.terminalButton}`}></div>
                <div className={`${styles.terminalMinimize} ${styles.terminalButton}`}></div>
                <div className={`${styles.terminalOpen} ${styles.terminalButton}`}></div>
            </div>
            <div className={styles.terminalScreen}>
                <div className={styles.informationContainer}>
                    <h3 className={styles.company}>{companyName}</h3>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.dates}>{dates.dateStart} - {dates.dateEnd ? dates.dateEnd : 'Current'}</p>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.skillsContainer}>
                    <ul>
                        {skills.map((skill, index: number) => (
                            <li key={index} className={styles.skills}>{skill.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}