import { useState } from "react";
import BusIcon from "../assets/BusIcon.png";
import Button from "../utils/Button";

function SearchBar() {
  const [round, setRound] = useState(false);
  const [rounded, setRounded] = useState(false);

  return (
    <>
      <div className=" relative bg-[url('./assets/mainPhoto.jpg')] h-60 bg-contain mb-40">
        <div className="bg-white  p-5 shadow-md md:max-w-4xl lg:max-w-2xl xl:max-w-5xl top-72 xl:top-32 2xl:top-96 2xl:max-w-7xl absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-lg ">
          <div className="flex justify-between">
            <h1 className="2xl:text-4xl lg:text-3xl   text-xl font-semibold text-gray-700 pb-5">
              The simplest way to book bus travel.
            </h1>
            <div className="-mt-4">
              <img
                className="md:h-20 md:w-20 w-20 max-md:mt-3 h-14"
                src={BusIcon}
                alt=""
              />
            </div>
          </div>

          <form className="">
            <div className="">
              <div className="flex gap-5">
                <div className="flex gap-1">
                  <input
                    className="w-5"
                    onClick={() => setRound(false)}
                    type="radio"
                    id="onway"
                    name="value"
                  />
                  <label htmlFor="onway">One way</label>
                </div>

                <div className="flex gap-1">
                  <input
                    className="w-5"
                    onClick={() => setRound(true)}
                    type="radio"
                    id="Round"
                    name="value"
                  />
                  <label htmlFor="Round">Round trip</label>
                </div>
              </div>
            </div>

            <div className=" text-sm gap-2 mt-5 flex max-xl:flex-wrap">
              <div className="w-full xl:flex gap-2">
                <div className=" rounded-md px-2 border flex gap-1 justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    className="w-60 outline-none xl:py-1 py-3 font-light text-balck"
                    type="text"
                    placeholder="From:address or city"
                  />
                </div>

                <div
                  onClick={() => setRounded(!rounded)}
                  className=" w-full flex justify-center"
                >
                  <svg
                    aria-hidden="true"
                    className={
                      !rounded
                        ? "w-12 h-12 px-2 max-xl:my-1 transform rotate-0 rounded-md border"
                        : "w-12 h-12 px-2 max-xl:my-1 transform rotate-90 rounded-md  border"
                    }
                    focusable="false"
                    viewBox="0 0 24 24"
                    alt="switcheroo"
                  >
                    <path
                      d="M23.7071 8.70714C24.0976 8.31661 24.0976 7.68345 23.7071 7.29292L19.7071 3.29292C19.4211 3.00692 18.991 2.92137 18.6173 3.07615C18.2436 3.23093 18 3.59557 18 4.00003L18 6.00003L11 6.00003C10.4477 6.00003 10 6.44775 10 7.00003L10 9.00003C10 9.55232 10.4477 10 11 10L18 10L18 12C18 12.4045 18.2436 12.7691 18.6173 12.9239C18.991 13.0787 19.4211 12.9931 19.7071 12.7071L23.7071 8.70714Z"
                      fill="#B6BDC7"
                    ></path>
                    <path
                      d="M14 15C14 14.4477 13.5523 14 13 14L6 14L6 12C6 11.5956 5.75636 11.2309 5.38268 11.0761C5.00901 10.9214 4.57889 11.0069 4.29289 11.2929L0.292892 15.2929C-0.097632 15.6834 -0.097632 16.3166 0.292892 16.7071L4.29289 20.7071C4.57889 20.9931 5.00901 21.0787 5.38268 20.9239C5.75636 20.7691 6 20.4045 6 20L6 18L13 18C13.5523 18 14 17.5523 14 17L14 15Z"
                      fill="#B6BDC7"
                    ></path>
                  </svg>
                </div>

                <div className="rounded-md px-2 border w-full  flex gap-1 justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <input
                    className="outline-none py-3 font-light text-balck"
                    type="text"
                    placeholder="To:address or city"
                  />
                </div>
              </div>

              <div className=" w-full flex max-lg:flex-wrap gap-2">
                <input
                  className="outline-none w-full border rounded-md pl-4 pr-5 py-3 max-md:w-full  font-light text-balck"
                  type="date"
                />
                {round && (
                  <input
                    className="outline-none w-full border rounded-md pl-4 pr-5 py-3 max-md:w-full  font-light text-balck"
                    type="date"
                  />
                )}
              </div>

              <div className="w-full">
                <Button
                  name={"Search"}
                  css={
                    "text-center py-3 xl:px-5 2xl:px-10 2xl:py-4 block uppercase "
                  }
                />
              </div>
            </div>

            <div className="flex gap-5 text-sm font-light mt-3 ">
              <div className="flex gap-1">
                <input type="checkbox" name="chack" id="ac" />
                <label htmlFor="ac">A\C</label>
              </div>

              <div className="flex gap-1">
                <input type="checkbox" name="chack" id="nonAc" />
                <label htmlFor="nonAc">Non A\C</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
