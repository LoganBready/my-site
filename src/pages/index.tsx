import type { NextPage } from "next";
import Head from "next/head";
import { BaseLayout } from "../Layouts/BaseLayout";
import { HomeContent } from "../components/HomeContent/HomeContent";
import { AboutSection } from "../components/About/AboutSection";
import { ProjectsContent } from "../components/ProjectsContent";
import { Contact } from "../components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <HomeContent />
      <AboutSection />
      <ProjectsContent />
      <Contact />
    </BaseLayout>
  );
};

export default Home;
