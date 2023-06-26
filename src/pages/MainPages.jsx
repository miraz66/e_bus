import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import CompanyDetails from "../components/CompanyDetails";
import EBusApp from "../components/EBusApp";
import Footer from "../components/Footer";

import { Data } from "../assets/Data";
import { busData } from "../assets/busDAta/BusData";
import { RoutsData } from "../assets/routesData/Data";

function Home() {
  return (
    <div className="">
      {/* SerchBar */}
      <SearchBar />

      {/* Service Card */}
      <div className="p-10 max-xl:mt-80 max-w-xl md:max-w-2xl  lg:max-w-5xl 2xl:max-w-7xl mx-auto grid gap-5 max-lg:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
        {Data.map((e, index) => (
          <Card
            icon={e.image}
            name={e.name}
            paragraph={e.paragraph}
            css={"text-center shadow rounded-md p-3"}
            iconCss={"w-12 mx-auto"}
            hCss={"py-2 text-xl 2xl:text-2xl text-gray-700 font-bold"}
            pCss={"text-base 2xl:text-lg text-gray-500"}
            key={index}
          />
        ))}
      </div>

      {/* Our partners include  */}
      <div className="max-w-7xl mx-auto lg:mt-28">
        <div className="">
          <h1 className="text-center 2xl:text-5xl lg:text-4xl md:text-3xl text-2xl  pb-20">
            Our partners include
          </h1>
        </div>

        <div className="grid gap-5 grid-cols-2 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 ">
          {busData.map((e, index) => (
            <div
              key={index}
              className="w-full border h-32 cursor-pointer rounded-md shadow-xl hover:shadow ease-in flex justify-center items-center  "
            >
              <img className="" src={e} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Company Details */}
      <CompanyDetails />

      {/* Mobile App */}
      <div className="mb-10 lg:h-[600px] bg-gradient-to-br from-sky-300 via-green-300 to-sky-300 overflow-hidden">
        <EBusApp />
      </div>

      {/* Most Popular Routes */}
      <div className="max-w-7xl mx-auto p-10 pb-28">
        <h2 className="text-xl md:text-3xl xl:text-4xl font-bold text-center xl:py-20 pb-10">
          {" "}
          Most Popular Routes
        </h2>
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {RoutsData.map(({ images, route }, index) => (
            <Card
              key={index}
              images={images}
              imagesCss="shadow hover:scale-110 ease-in-out duration-200"
              name={route}
              css="border cursor-pointer"
              hCss={"py-2 pl-2 hover:underline"}
              imgDevCss="overflow-hidden"
            />
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
