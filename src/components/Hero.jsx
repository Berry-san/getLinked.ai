import Header from './Header'
import line from '../assets/line.svg'
import chain from '../assets/chain.svg'
import bulb from '../assets/bulb.svg'
import spark from '../assets/spark.svg'
import human from '../assets/human.svg'
import glasses from '../assets/glasses.svg'
import globe from '../assets/globe.svg'

const Hero = () => {
  return (
    <section className=" bg-gray-900 border-b overflow-hidden h-full">
      <Header />
      {/* <section className="flex flex-col mb-20 pl-28 md:flex-row">
        <div className="grid mt-28">
          <span className="font-sans font-bold text-white text-7xl">
            getlinked Tech
          </span>
          <div className="flex">
            <span className="font-sans font-bold text-white text-7xl">
              Hackathon{' '}
            </span>
            <div className="flex">
              <span className="font-sans font-bold text-fuchsia-500 text-7xl">
                1.0
              </span>
              <img src={chain} alt="" className="w-20 h-20" />
              <img src={spark} alt="" className="w-20 h-20" />
            </div>
          </div>
          <p className="text-xl font-normal leading-loose text-white font-montSerrat">
            Participate in getlinked tech Hackathon 2023 stand <br />a chance to
            win a Big prize
          </p>
          <button className="mt-10 text-white rounded w-44 h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink ">
            Register
          </button>
          <div className="mt-20 font-mono text-6xl font-normal leading-10 text-white space-x-7">
            <span>
              00<sub className="text-sm font-normal capitalize">H</sub>
            </span>
            <span>
              00<sub className="text-sm font-normal capitalize">M</sub>
            </span>
            <span>
              00<sub className="text-sm font-normal capitalize">S</sub>
            </span>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid">
            <h2 className="text-4xl italic font-bold text-white -ml-14 font-montSerrat">
              Igniting a Revolution in HR Innovation
            </h2>{' '}
            <div className="flex justify-end">
              <img src={line} alt="" className="flex justify-end" />
            </div>
          </div>
        </div>
      </section> */}
      <div className="grid grid-cols-2 px-10 lg:px-28 gap-10 pt-10">
        <div className="flex flex-col pt-10 lg:pt-28 col-span-2 lg:col-span-1 justify-center items-center lg:items-start space-y-5">
          <div className="flex flex-col lg:hidden">
            <h2 className="text-2xl italic font-bold text-white font-montSerrat">
              Igniting a Revolution in HR Innovation
            </h2>{' '}
            <div className="flex justify-end">
              <img src={line} alt="" className="flex justify-end w-48" />
            </div>
          </div>
          <div className="flex">
            <img src={bulb} alt="" className="flex w-5 " />
          </div>
          <span className="font-sans font-bold text-white text-2xl xl:text-7xl">
            getlinked Tech
          </span>
          <div className="flex">
            <span className="font-sans font-bold text-white text-2xl lg:text-7xl">
              Hackathon{' '}
            </span>
            <div className="flex">
              <span className="font-sans font-bold text-fuchsia-500 text-2xl lg:text-7xl">
                1.0
              </span>
              <img src={chain} alt="" className="w-8 lg:w-20 h-8 lg:h-20" />
              <img src={spark} alt="" className="w-8 lg:w-20 h-8 lg:h-20" />
            </div>
          </div>
          <p className="text-xl font-normal leading-loose text-white font-montSerrat">
            Participate in getlinked tech Hackathon 2023 stand <br />a chance to
            win a Big prize
          </p>
          <button className="mt-10 text-white rounded w-44 h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink ">
            Register
          </button>
          <div className="mt-20 font-mono text-6xl font-normal leading-10 text-white space-x-7 pb-10">
            <span>
              00<sub className="text-sm font-normal capitalize">H</sub>
            </span>
            <span>
              00<sub className="text-sm font-normal capitalize">M</sub>
            </span>
            <span>
              00<sub className="text-sm font-normal capitalize">S</sub>
            </span>
          </div>
        </div>
        <div className="relative h-full w-full col-span-2 lg:col-span-1">
          {/* <div className="absolute bottom-0">
            <div className="mt-9 relative "> */}
          {/* <img src={globe} alt="" /> */}
          <div className="hidden flex-col lg:flex max-w-[31rem]">
            <h2 className="text-2xl italic font-bold text-white font-montSerrat ">
              Igniting a Revolution in HR Innovation
            </h2>{' '}
            <div className="flex justify-end">
              <img src={line} alt="" className="flex justify-end w-48" />
            </div>
          </div>
          <img
            src={glasses}
            alt=""
            className="absolute bottom-0 hidden lg:flex"
          />
          <img src={glasses} alt="" className="flex lg:hidden" />
          {/* </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
