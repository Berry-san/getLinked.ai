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
            <img
              src="/src/assets/png/Liberty company logo white colour.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center">
            <img src="/src/assets/png/Liberty company logo white.png" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/src/assets/png/Paybox.png" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/src/assets/png/Vuzual Plus.png" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/src/assets/png/Winwise logo White colour 1.png" alt="" />
          </div>
          <div className="flex items-center justify-center">
            <img src="/src/assets/png/wisper logo white.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
