import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { Data } from "../assets/Data";
import { busData } from "../assets/busDAta/BusData";

function Home() {
  return (
    <div className="">
      <SearchBar />

      <div className=" p-10 max-xl:mt-80 max-w-xl md:max-w-2xl  lg:max-w-5xl 2xl:max-w-7xl mx-auto grid gap-3 max-lg:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
        {Data.map((e, index) => (
          <Card
            image={e.image}
            name={e.name}
            paragraph={e.paragraph}
            css={"text-center shadow rounded-md p-3"}
            imageCss={"w-12 mx-auto"}
            hCss={"py-2 text-xl 2xl:text-2xl font-bold"}
            pCss={"text-base 2xl:text-xl"}
            key={index}
          />
        ))}
      </div>

      {/* Our partners include  */}
      <div className="max-w-7xl mx-auto p-10 lg:mt-28">
        <div className="">
          <h1 className="text-center 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl  pb-20">
            Our partners include{" "}
          </h1>
        </div>

        <div className="grid gap-5 grid-cols-2 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 ">
          {busData.map((e, index) => (
            <div
              key={index}
              className="  w-full border h-32 cursor-pointer rounded-md shadow-xl hover:shadow ease-in flex justify-center items-center  "
            >
              <img className="" src={e} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
