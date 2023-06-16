import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { Data } from "../assets/customerFacilityData/Data";

function Home() {
  return (
    <div className="">
      <SearchBar />

      <div className=" w-10/12 mx-auto p-10 grid grid-cols-4 justify-between auto-rows-auto">
        {Data.map((e, index) => (
          <Card
            image={e.image}
            name={e.name}
            paragraph={e.paragraph}
            css={"text-center"}
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
