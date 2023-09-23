import bigIdea from '../assets/bigIdea.svg'

const Intro = () => {
  return (
    <section className="bg-gray-900 border-b" id="intro">
      <div className="grid flex-col-reverse items-center justify-center grid-cols-2 gap-10 py-10 lg:py-20 px-10 lg:px-28">
        <div className="col-span-2 md:col-span-1">
          <img src={bigIdea} alt="" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div>
            <span className="text-white text-3xl font-bold font-['Clash Display']">
              Introduction to getlinked
              <br />
            </span>
            <span className="text-fuchsia-500 text-3xl font-bold font-['Clash Display']">
              tech Hackathon 1.0
            </span>
          </div>
          <div className="text-white text-sm font-normal font-['Montserrat'] leading-7">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as
            <br />
            clear as day: to shape the future. Whether you're a coding genius, a{' '}
            <br />
            design maverick, or a concept wizard, you'll have the chance to
            transform <br />
            your ideas into reality. Solving real-world problems, pushing the
            boundaries
            <br />
            of technology, and creating solutions that can change the world,
            <br />
            that's what we're all about!
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
