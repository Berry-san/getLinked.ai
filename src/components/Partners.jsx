import pic1 from '../assets/png/Liberty company logo white colour.png'
import pic2 from '../assets/png/Liberty company logo white.png'
import pic3 from '../assets/png/Paybox.png'
import pic4 from '../assets/png/Vuzual Plus.png'
import pic5 from '../assets/png/Winwise logo White colour 1.png'
import pic6 from '../assets/png/wisper logo white.png'

const Partners = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center grid-cols-2 gap-10 py-10 lg:py-20 px-10 lg:px-28">
        <div className="text-center">
          <h2 className="font-sans text-3xl font-bold leading-7 text-white">
            Partners and Sponsors
          </h2>
          <div className="text-sm font-normal leading-7 text-center text-white font-montSerrat">
            Getlinked Hackathon 1.0 is honored to have the following major{' '}
            <br />
            companies as its partners and sponsors
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 py-[2rem] lg:py-[9rem] px-[3rem] lg:px-[11rem] border rounded border-darkPink">
          <div className="flex items-center justify-center">
            <img src={pic1} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src={pic2} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src={pic3} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src={pic4} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src={pic5} alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src={pic6} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
