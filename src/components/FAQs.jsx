import cloud from '../assets/cloud.svg'
import Accordion from './Accordion'

const FAQs = () => {
  return (
    <section className="bg-gray-900 border-b">
      <div className="grid items-center justify-center grid-cols-2 gap-10 py-10 lg:py-20 px-10 lg:px-28">
        <div className="col-span-2 md:col-span-1">
          <div>
            <span className="text-white text-3xl font-bold font-['Clash Display']">
              Privacy Policy and <br />
            </span>
            <span className="text-fuchsia-500 text-3xl font-bold font-['Clash Display']">
              Terms
            </span>
            <p className="text-white text-opacity-75 text-sm font-normal font-['Montserrat'] leading-7 mt-2">
              Last updated on September 12, 2023
            </p>
            <p className="text-white text-sm font-normal font-['Montserrat'] leading-relaxed my-6">
              Below are our privacy & policy, which outline a lot of goodies.{' '}
              <br />
              it’s our aim to always take of our participant
            </p>
          </div>
          <Accordion />
        </div>
        <div className="col-span-2 md:col-span-1">
          <img src={cloud} alt="" />
        </div>
      </div>
    </section>
  )
}

export default FAQs
