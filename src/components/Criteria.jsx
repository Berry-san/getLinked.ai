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
