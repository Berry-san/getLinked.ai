import humans from '../assets/humans.svg'

const Criteria = () => {
  return (
    <section className="bg-gray-900 border-b">
      <div className="grid items-center justify-center grid-cols-2 gap-10 py-10 lg:py-20 px-10 lg:px-28">
        <div className="col-span-2 lg:col-span-1">
          <img src={humans} alt="" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div>
            <div>
              <span className="font-sans text-3xl font-bold text-white">
                Judging Criteria
                <br />
              </span>
              <span className="font-sans text-3xl font-bold text-fuchsia-500">
                Key attributes
              </span>
            </div>
          </div>
          <div className="mt-5 space-y-5 text-sm font-normal leading-7 text-white font-montSerrat">
            <div>
              <span className="text-pink text-base font-bold font-['Montserrat'] leading-7">
                Innovation and Creativity
              </span>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
                : Evaluate the uniqueness and creativity of the
                <br />
                solution. Consider whether it addresses a real-world problem in
                a novel <br />
                way or introduces innovative features.
              </span>
            </div>
            <div>
              <span className="text-pink text-base font-bold font-['Montserrat'] leading-7">
                Functionality:
              </span>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
                {' '}
                Assess how well the solution works. Does it perform its <br />
                intended functions effectively and without major issues? Judges
                would
                <br />
                consider the completeness and robustness of the solution.
              </span>
            </div>
            <div>
              <span className="text-pink text-base font-bold font-['Montserrat'] leading-7">
                Impact and Relevance:{' '}
              </span>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
                Determine the potential impact of the solution <br />
                in the real world. Does it address a significant problem, and is
                it relevant <br />
                to the target audience? Judges would assess the potential
                social, <br />
                economic, or environmental benefits.
              </span>
            </div>
            <div>
              <span className="text-pink text-base font-bold font-['Montserrat'] leading-7">
                Technical Complexity:{' '}
              </span>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
                Evaluate the technical sophistication of the solution. <br />
                Judges would consider the complexity of the code, the use of
                advanced <br />
                technologies or algorithms, and the scalability of the solution.
              </span>
            </div>
            <div>
              <span className="text-pink text-base font-bold font-['Montserrat'] leading-7">
                Adherence to Hackathon Rules:{' '}
              </span>
              <span className="text-white text-sm font-normal font-['Montserrat'] leading-normal">
                Judges will Ensure that the team adhered <br />
                to the rules and guidelines of the hackathon, including
                deadlines, use of <br />
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </div>
            <button className="text-white rounded w-44 h-14 bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Criteria
