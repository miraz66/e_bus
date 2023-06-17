import LocationPhoto from "../assets/locationImge.png";

function MobileApp() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-10 flex lg:flex-nowrap flex-wrap-reverse">
        <div className=" mt-20 lg:mx-0 mx-auto justify-between">
          <h1 className="2xl:text-4xl text-xl text-gray-800">
            Book buses on the go with the E-bus app.
          </h1>

          <p className="2xl:text-xl text-sm py-10 text-gray-700">
            Download our app and snag the best travel deals <br /> across
            Bangladesh.{" "}
            <span className="pt-1 flex text-gray-500 items-center hover:gap-1 hover:underline cursor-pointer">
              Learn more..{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 -mb-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </span>
          </p>

          <div className="flex gap-5 justify-center lg:justify-start">
            <button className="bg-gray-300 px-5 lg:px-8 py-2 text-sm lg:text-base rounded-md flex items-center gap-1 active:bg-green-300">
              <svg
                aria-hidden="true"
                focusable="false"
                className="w-4 lg:w-5"
                viewBox="0 0 24 24"
                alt="wanderu"
              >
                <g>
                  <path d="M15.03 12.894c-.026-2.875 2.288-4.274 2.393-4.34-1.31-1.964-3.34-2.233-4.054-2.254-1.705-.184-3.359 1.05-4.228 1.05-.886 0-2.224-1.031-3.665-1C3.621 6.378 1.885 7.483.933 9.2c-1.965 3.499-.5 8.641 1.382 11.47.942 1.385 2.042 2.931 3.482 2.877 1.409-.06 1.935-.925 3.636-.925 1.684 0 2.178.925 3.647.89 1.512-.025 2.464-1.391 3.373-2.79 1.088-1.587 1.525-3.151 1.542-3.231-.035-.012-2.936-1.15-2.965-4.597"></path>
                  <path d="M12.607 3.638c.766-.973 1.29-2.295 1.144-3.638-1.109.05-2.495.778-3.293 1.73-.707.838-1.338 2.212-1.175 3.503 1.246.094 2.524-.638 3.324-1.595"></path>
                </g>
              </svg>
              iPhone
            </button>

            <button className="bg-gray-300 px-5 lg:px-8 py-1 text-sm lg:text-base rounded-md flex items-center gap-1 active:bg-green-300">
              <svg
                aria-hidden="true"
                focusable="false"
                className="w-4 lg:w-5"
                viewBox="0 0 24 24"
                alt="wanderu"
              >
                <path d="M18.582 8.4a1.344 1.344 0 00-1.359-1.33 1.344 1.344 0 00-1.331 1.357l.057 5.624a1.343 1.343 0 001.359 1.329 1.343 1.343 0 001.331-1.357L18.582 8.4zM3.335 7.465l.09 8.714a1.432 1.432 0 001.45 1.419l.976-.01.031 2.976a1.345 1.345 0 002.69-.028l-.03-2.975 1.816-.018.03 2.975a1.344 1.344 0 002.69-.028l-.03-2.975.981-.01a1.435 1.435 0 001.422-1.448l-.09-8.714-12.026.122zm8.743-2.747a.507.507 0 11-.011-1.015.507.507 0 01.011 1.015zm-5.517.056a.508.508 0 11-.008-1.015.508.508 0 01.008 1.015zm5.701-2.702L13.184.35a.187.187 0 00-.076-.253.187.187 0 00-.252.077l-.931 1.739a6.466 6.466 0 00-2.642-.526 6.465 6.465 0 00-2.624.576L5.692.249A.186.186 0 005.44.177a.184.184 0 00-.072.253l.957 1.7C4.488 3.1 3.259 4.922 3.28 6.999l12.117-.122c-.02-2.077-1.283-3.87-3.136-4.804zM1.465 7.23A1.344 1.344 0 00.133 8.586l.058 5.624a1.344 1.344 0 001.359 1.33 1.342 1.342 0 001.331-1.357l-.056-5.624a1.345 1.345 0 00-1.36-1.329z"></path>
              </svg>
              Android
            </button>
          </div>
        </div>

        <div className="mx-auto  ">
          <div className=" p-5 bg-[url('./assets/mobilePhoto.png')] bg-cover lg:h-[720px] h-96 w-64 lg:w-[350px] ">
            <div className="flex flex-col justify-between h-full lg:pb-32">
              <div className="text-white flex  justify-between">
                <p className="pl-4 text-sm">13.34</p>
                <div className="flex items-center -mt-1 pr-2 gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15zM4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex items-center flex-col px-2">
                <img className="" src={LocationPhoto} alt="" />
                <button className="w-full py-2 m-5 bg-red-500">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileApp;
