import type { NextPage } from 'next'
import { BaseLayout } from '../Layouts/BaseLayout'
import { About } from '../components/About'
import { Experience } from '../components/Experience'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className="homePage">
        <About />
        <Experience />
      </div>
    </BaseLayout>
  )
}

export default Home
