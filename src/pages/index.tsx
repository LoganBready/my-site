import type { NextPage } from "next";
import { BaseLayout } from "../Layouts/BaseLayout";
import { About } from "../components/About";


const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className="homePage">
        <About />
      </div>
    </BaseLayout>
  );
};

export default Home;
