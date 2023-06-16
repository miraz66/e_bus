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

      {/* Company Details */}

      <div className="max-w-7xl mx-auto px-10 mt-20">
        <div className="">
          <h1 className=" text-xl lg:text-3xl md:text-2xl 2xl:text-5xl ">
            What is E-bus?
          </h1>
          <p className="text-xs md:text-base lg:text-lg 2xl:text-2xl  py-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aut ea ipsa quas! Blanditiis ullam, aperiam veritatis iure,
            repellendus ad fuga saepe magnam quo odio animi molestiae eveniet
            distinctio nihil. ipsum Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Recusandae a quam voluptatem, minima, obcaecati
            odio autem sunt aliquam, reiciendis expedita fugit architecto enim?
            Sint assumenda, cumque officia consectetur facere odio.
          </p>

          <p className="text-xs md:text-base lg:text-lg 2xl:text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aut ea ipsa quas! Blanditiis ullam, aperiam veritatis iure,
            repellendus ad fuga saepe magnam quo odio animi molestiae eveniet
            distinctio nihil. ipsum Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </p>

          <h1 className=" text-xl lg:text-3xl md:text-2xl 2xl:text-5xl  mt-20">
            Why use E-bus to book bus tickets?
          </h1>
          <p className=" text-xs md:text-base lg:text-lg 2xl:text-2xl  py-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aut ea ipsa quas! Blanditiis ullam, aperiam veritatis iure,
            repellendus ad fuga saepe magnam quo odio animi molestiae eveniet
            distinctio nihil.
          </p>

          <p className=" text-xs md:text-base lg:text-lg 2xl:text-2xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aut ea ipsa quas! Blanditiis ullam, aperiam veritatis iure,
            repellendus ad fuga saepe magnam quo odio animi molestiae eveniet
            distinctio nihil. ipsum Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Recusandae a quam voluptatem, minima, obcaecati
            odio autem sunt aliquam, reiciendis expedita fugit architecto enim?
            Sint assumenda, cumque officia consectetur facere odio.
          </p>

          <h1 className=" text-xl lg:text-3xl md:text-2xl 2xl:text-5xl  mt-20">
            How to find cheap bus tickets on E-bus:
          </h1>
          <ul className="list-decimal pl-10 text-xs md:text-base lg:text-lg  2xl:text-2xl mt-8 flex flex-col gap-1">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa ,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis ullam,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis ullam,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis ullam,{" "}
            </li>
          </ul>

          <h1 className=" text-xl lg:text-3xl md:text-2xl 2xl:text-5xl  mt-20">
            Why you should travel by bus:
          </h1>
          <ul className="list-disc pl-10 text-xs md:text-base lg:text-lg  2xl:text-2xl mt-8 flex flex-col gap-1">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa ,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis ullam,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis ullam,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis ullam,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis ullam,{" "}
            </li>

            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates aut ea ipsa quas! Blanditiis ullam,{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
