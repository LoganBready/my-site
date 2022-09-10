import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { BaseLayout } from "../Layouts/BaseLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div>
        <h2 className="text-3xl font-bold">Home Page</h2>
      </div>
    </BaseLayout>
  );
};

export default Home;
