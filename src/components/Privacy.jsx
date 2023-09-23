import privacy from '../assets/privacy.svg'

const Privacy = () => {
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
          <div className="bg-zinc-300 bg-opacity-5 rounded border border-fuchsia-500 px-5 py-7 lg:px-10 lg:py-14 flex items-center justify-center">
            <div className="">
              <article className="text-white text-sm font-normal font-montSerrat leading-loose max-w-[26.5rem] text-center lg:text-left">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </article>
              <article className="my-3">
                <h3 className="text-fuchsia-500 text-base font-bold font-['Montserrat'] leading-9">
                  Licensing Policy
                </h3>
                <p className="text-white text-sm font-bold font-['Montserrat'] leading-loose mb-4">
                  Here are terms of our Standard License:
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  <li className="flex ">
                    <svg
                      className="w-3.5 h-3.5 mr-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <div className="text-white text-sm font-normal font-['Montserrat'] leading-loose ">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </div>

                    {/* <div className="text-white text-sm font-normal font-['Montserrat'] leading-loose"></div> */}
                  </li>
                  <li className="flex">
                    <svg
                      className="w-3.5 h-3.5 mr-5 mt-1.5 text-green-500 dark:text-green-400 flex-shrink-0 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <div className="text-white text-sm font-normal font-['Montserrat'] leading-loose ">
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </div>
                  </li>
                </ul>
              </article>
              <div className="text-center">
                <button className="text-white  rounded w-44 h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink ">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <img src={privacy} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Privacy
