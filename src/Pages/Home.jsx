import Criteria from '../components/Criteria'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Partners from '../components/Partners'
import Privacy from '../components/Privacy'
import Prizes from '../components/Prizes'
import Rules from '../components/Rules'
// import Timeline from './components/Timeline'
import Timeline from '../components/Timeline'

function Home() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Intro />
      <Rules />
      <Criteria />
      <FAQs />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </div>
  )
}

export default Home
