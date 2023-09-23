import twitter from '../assets/Vector.svg'
import facebook from '../assets/Vector-1.svg'
import instagram from '../assets/mdi_instagram.svg'
import linkedIn from '../assets/ri_linkedin-fill.svg'
import phone from '../assets/phone.svg'
import map from '../assets/map.svg'

const Footer = () => {
  return (
    <section className="py-10">
      <div className="pb-10 px-10 lg:px-40 bg-gray-900 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        <article className="flex flex-col">
          <div>
            <span className="text-white text-3xl font-bold font-['Clash Display']">
              get
            </span>
            <span className="text-fuchsia-500 text-3xl font-bold font-['Clash Display']">
              linked
            </span>
          </div>

          <div className="text-white text-xs font-normal font-['Montserrat'] leading-tight mt-3">
            Getlinked Tech Hackathon is a technology innovation program <br />
            established by a group of organizations with the aim of showcasing{' '}
            <br />
            young and talented individuals in the field of technology
          </div>

          <div className="text-white text-xs font-normal font-['Montserrat'] leading-tight mt-12">
            <span className="pr-3  border-r-2 border-fuchsia-500">
              Terms of Use
            </span>
            <span className="pl-3"> Privacy Policy</span>
          </div>
        </article>
        <article>
          <ul className="space-y-3">
            <li className="text-fuchsia-500 text-sm font-semibold font-['Montserrat'] leading-normal">
              Useful Links
            </li>
            <li className="text-white text-xs font-normal font-['Montserrat'] leading-tight">
              Overview
            </li>
            <li className="text-white text-xs font-normal font-['Montserrat'] leading-tight">
              Timeline
            </li>
            <li className="text-white text-xs font-normal font-['Montserrat'] leading-tight">
              FAQs
            </li>
            <li className="text-white text-xs font-normal font-['Montserrat'] leading-tight">
              Register
            </li>
            <li className="flex items-center space-x-5">
              <span className="text-fuchsia-500 text-xs font-normal font-['Montserrat']">
                Follow us
              </span>
              <div className="flex space-x-2">
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedIn} alt="" />
              </div>
            </li>
          </ul>
        </article>
        <article>
          <ul className="space-y-5">
            <li className="text-fuchsia-500 text-sm font-semibold font-['Montserrat'] leading-normal">
              Useful Links
            </li>
            <li className="flex items-center">
              <img
                src={phone}
                alt=""
                className="w-3.5 h-3.5 mr-5 text-green-500 dark:text-green-400 flex-shrink-0 "
              />
              <div className="text-white text-xs font-normal font-['Montserrat']">
                +234 6707653444
              </div>
            </li>
            <li className="flex">
              <img
                src={map}
                alt=""
                className="w-3.5 h-3.5 mr-5  text-green-500 dark:text-green-400 flex-shrink-0 "
              />
              <div className="text-white text-xs font-normal font-['Montserrat'] leading-tight">
                27,Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
              </div>
            </li>
          </ul>
        </article>
      </div>
      <div className="text-white text-center text-xs font-normal font-['Montserrat']">
        All rights reserved. © getlinked Ltd.
      </div>
    </section>
  )
}

export default Footer
