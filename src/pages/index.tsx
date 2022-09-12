import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BaseLayout } from "../Layouts/BaseLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <section className={styles.Home} id="Home">
        <p>Home</p>
      </section>
    </BaseLayout>
  );
};

export default Home;
