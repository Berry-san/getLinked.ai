import trophy from '../assets/trophy.svg'
import gold from '../assets/gold.svg'
import silver from '../assets/silver.svg'
import bronze from '../assets/bronze.svg'
const Prizes = () => {
  return (
    <section className="bg-gray-900 border-b">
      <div className="grid grid-cols-2 py-20 px-28">
        <div className="col-span-2 md:col-span-1">
          <img src={trophy} alt="" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <div>
            <div className="text-center">
              <div>
                <span className="font-sans text-3xl font-bold text-white">
                  Prizes and
                  <br />
                </span>
                <span className="font-sans text-3xl font-bold text-fuchsia-500">
                  Rewards
                </span>
              </div>
            </div>
            <div className="mt-5 space-y-5 text-sm font-normal leading-7 text-white font-montSerrat">
              <div className="text-center">
                <span>
                  Highlight of our prizes or reward for winners and for
                  participants
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-40 space-x-10">
            <div className="border rounded-lg w-52 h-72 bg-fuchsia-500 bg-opacity-10 border-fuchsia-500">
              <div className="flex items-center justify-center -mt-28">
                <img src={silver} alt="" className="" />
              </div>
              <div className="flex flex-col items-center justify-center mt-20 text-center">
                <span className="text-2xl font-bold leading-10 text-white font-montSerrat">
                  2nd <br /> Runner
                </span>
                <span className="text-3xl font-bold leading-10 text-fuchsia-500 font-montSerrat">
                  N300,000
                </span>
              </div>
            </div>
            <div className="bg-purple-600 border border-purple-600 rounded-lg w-52 h-80 bg-opacity-10">
              <div className="flex items-center justify-center -mt-32">
                <img src={gold} alt="" className="w-[18.5rem] h-[18.5rem]" />
              </div>
              <div className="flex flex-col items-center justify-center mt-32 text-center">
                <span className="text-2xl font-bold leading-10 text-white font-montSerrat">
                  1st
                  <br /> Runner
                </span>
                <span className="text-3xl font-bold leading-10 text-fuchsia-500 font-montSerrat">
                  N400,000
                </span>
              </div>
            </div>
            <div className="border rounded-lg w-52 h-72 bg-fuchsia-500 bg-opacity-10 border-fuchsia-500">
              <div className="flex items-center justify-center -mt-28">
                <img src={bronze} alt="" className="" />
              </div>
              <div className="flex flex-col items-center justify-center mt-20 text-center">
                <span className="text-2xl font-bold leading-10 text-white font-montSerrat">
                  3rd <br /> Runner
                </span>
                <span className="text-3xl font-bold leading-10 text-fuchsia-500 font-montSerrat">
                  N150,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
