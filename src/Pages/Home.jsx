import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { Data } from "../assets/customerFacilityData/Data";

function Home() {
  return (
    <div className="">
      <SearchBar />

      <div className=" p-5 max-xl:mt-96  max-w-xl md:max-w-2xl lg:max-w-5xl 2xl:max-w-7xl mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
        {Data.map((e, index) => (
          <Card
            image={e.image}
            name={e.name}
            paragraph={e.paragraph}
            css={"text-center shadow rounded-md p-3"}
            imageCss={"w-12 mx-auto"}
            hCss={"text-xl font-bold"}
            pCss={"text-lg"}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
