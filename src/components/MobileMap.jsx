import mapImage from "../assets/mapImage.jpg";

function MobileMap() {
  return (
    <>
      <div className="max-w-7xl p-10 mx-auto flex justify-between m-20 flex-wrap">
        <div className="md:w-1/3">
          <div className="relative bg-[url('./assets/mobilePhoto.png')] h-[31rem] w-60 bg-cover ">
            <div className="h-[22rem] md:h-[25rem] w-[250px] md:w-[261px] absolute left-5 bottom-14">
              <img className="rounded-3xl" src={mapImage} alt="" />
            </div>
          </div>
        </div>

        <div className="md:w-2/3 my-auto">
          <h2 className=" text-3xl md:text-4xl xl:text-5xl text-gray-800">
            Track Location
          </h2>
          <hr className="bg-gray-500 h-1 rounded-full mt-4 mb-10" />
          <p className="text-base md:text-lg xl:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            quos beatae iure dolore, iusto adipisci commodi odit enim itaque
            dolor odio error pariatur culpa, cupiditate rem quod esse quis
            repellendus.
          </p>
        </div>
      </div>
    </>
  );
}

export default MobileMap;
