//styles
import { Project } from './Project';
import styles from './ProjectsContent.module.scss';

export const ProjectsContent = () => {
    return (
        <section className={styles.Projects} id="Projects">
            <div className={styles.ProjectsWrapper}>
                <div className={styles.ProjectsText}>
                    <h1>Projects</h1>
                    <div className={styles.Bar}></div>
                </div>
                <div className={styles.ProjectsContainer}>
                  <Project 
                    position={1} 
                    title="The Fishing Store. A full stack e-commerce website." 
                    link="https://google.com" 
                    linkTitle="Github"
                    description="The Fishing Store is a full stack e-commerce website built in Postgresql, express, react.js, and node." 
                    image="/images/TheFishingStore.png" 
                    tech={['react', 'typescript', 'sass']} 
                  />
                  <Project
                    position={2}
                    title="CMS for a local business. A full stack website."
                    link="https://google.com"
                    linkTitle="Google"
                    description="test description"
                    image="/images/TheFishingStore.png"
                    tech={['react', 'typescript', 'sass']}
                  />
                </div>
            </div>
        </section>
    )
}