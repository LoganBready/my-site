import type { NextPage } from "next";
import Head from "next/head";
import { BaseLayout } from "../Layouts/BaseLayout";
import styles from "../styles/Home.module.css";
import { HomeContent } from "../components/HomeContent/HomeContent";
import { AboutSection } from "../components/About/AboutSection";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <section className={styles.Home} id="Home">
        <HomeContent />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <p>Projects</p>
      </section>
      <section>
        <p>Blog</p>
      </section>
      <section>
        <p>Contact</p>
      </section>
    </BaseLayout>
  );
};

export default Home;
