import { useState } from "react";
import BusIcon from "../assets/pngwing.com.png";
import Button from "../utils/Button";

function SearchBar() {
  const [round, setRound] = useState(false);
  const [rounded, setRounded] = useState(false);

  return (
    <>
      <div className=" relative bg-[url('./assets/mainPhoto.jpg')] h-60 bg-contain mb-40">
        <div className=" absolute  xl:max-w-6xl md:max-w-3xl md:top-48 top-96  shadow-md left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-lg bg-white">
          <div className="flex justify-between">
            <h1 className="md:text-3xl  text-xl font-semibold text-gray-700 pb-5">
              The simplest way to book bus travel.
            </h1>
            <div className="-mt-4">
              <img className="md:h-20 md:w-20 w-14 h-14" src={BusIcon} alt="" />
            </div>
          </div>

          <div className="">
            <form className=" ">
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

              <div className=" text-sm gap-2 mt-5 flex justify-center md:flex-nowrap flex-wrap">
                <div className="rounded-md px-2 border  flex gap-1 justify-center items-center ">
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
                    className="outline-none py-3   font-light text-balck"
                    type="text"
                    placeholder="From:address or city"
                  />
                </div>

                <div
                  onClick={() => setRounded(!rounded)}
                  className="rounded-md px-2 border  flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    className={
                      !rounded
                        ? "w-5 h-5 transform -rotate-0"
                        : "w-5 h-5  transform rotate-90"
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

                <div className="rounded-md px-2 border  flex gap-1 justify-center items-center ">
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
                    className="outline-none py-3   font-light text-balck"
                    type="text"
                    placeholder="To:address or city"
                  />
                </div>

                <div className="rounded-md px-2 border  flex">
                  <input
                    className="outline-none w-full pr-5 py-3 font-light text-balck"
                    type="date"
                  />
                  {round && (
                    <input
                      className="outline-none w-full border-l-2 pl-2 border-gray-700"
                      type="date"
                    />
                  )}
                </div>

                <div className="">
                  <Button
                    name={"Search"}
                    css={" block px-24 md:px-7  py-3 uppercase "}
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
      </div>
    </>
  );
}

export default SearchBar;
