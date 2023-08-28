import BusIcon from "../assets/BusIcon.png";

function Footer() {
  return (
    <>
      <div className="bg-green-300">
        <div className="max-w-7xl p-10 mx-auto flex justify-between flex-wrap-reverse md:flex-nowrap max-lg:gap-10">
          <div className="">
            <div className="flex gap-1 md:mb-10">
              <img
                className="w-10 md:w-10 h-full xl:w-16"
                src={BusIcon}
                alt=""
              />
              <h1 className=" text-3xl md:text-5xl xl:text-6xl font-bold text-green-500">
                E-bus
              </h1>
            </div>

            <div className="flex gap-1">
              <a
                className="p-2 hover:bg-green-500 rounded-full"
                href="#"
                aria-label="Instagram link"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  alt="Instagram"
                >
                  <path d="M12 3.8025C14.67 3.8025 14.9867 3.8125 16.0417 3.86083C18.7517 3.98417 20.0175 5.27 20.1408 7.96C20.1892 9.01417 20.1983 9.33083 20.1983 12.0008C20.1983 14.6717 20.1883 14.9875 20.1408 16.0417C20.0167 18.7292 18.7542 20.0175 16.0417 20.1408C14.9867 20.1892 14.6717 20.1992 12 20.1992C9.33 20.1992 9.01333 20.1892 7.95917 20.1408C5.2425 20.0167 3.98333 18.725 3.86 16.0408C3.81167 14.9867 3.80167 14.6708 3.80167 12C3.80167 9.33 3.8125 9.01417 3.86 7.95917C3.98417 5.27 5.24667 3.98333 7.95917 3.86C9.01417 3.8125 9.33 3.8025 12 3.8025V3.8025ZM12 2C9.28417 2 8.94417 2.01167 7.8775 2.06C4.24583 2.22667 2.2275 4.24167 2.06083 7.87667C2.01167 8.94417 2 9.28417 2 12C2 14.7158 2.01167 15.0567 2.06 16.1233C2.22667 19.755 4.24167 21.7733 7.87667 21.94C8.94417 21.9883 9.28417 22 12 22C14.7158 22 15.0567 21.9883 16.1233 21.94C19.7517 21.7733 21.775 19.7583 21.9392 16.1233C21.9883 15.0567 22 14.7158 22 12C22 9.28417 21.9883 8.94417 21.94 7.8775C21.7767 4.24917 19.7592 2.2275 16.1242 2.06083C15.0567 2.01167 14.7158 2 12 2V2ZM12 6.865C9.16417 6.865 6.865 9.16417 6.865 12C6.865 14.8358 9.16417 17.1358 12 17.1358C14.8358 17.1358 17.135 14.8367 17.135 12C17.135 9.16417 14.8358 6.865 12 6.865ZM12 15.3333C10.1592 15.3333 8.66667 13.8417 8.66667 12C8.66667 10.1592 10.1592 8.66667 12 8.66667C13.8408 8.66667 15.3333 10.1592 15.3333 12C15.3333 13.8417 13.8408 15.3333 12 15.3333ZM17.3383 5.4625C16.675 5.4625 16.1375 6 16.1375 6.6625C16.1375 7.325 16.675 7.8625 17.3383 7.8625C18.0008 7.8625 18.5375 7.325 18.5375 6.6625C18.5375 6 18.0008 5.4625 17.3383 5.4625Z"></path>
                </svg>
              </a>

              <a
                className="p-2 hover:bg-green-500 rounded-full"
                href="#"
                aria-label="Facebook link"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  focusable="false"
                  viewBox="0 0 24 24"
                  alt="Facebook"
                >
                  <path d="M9.5 8.66667H7V12H9.5V22H13.6667V12H16.7017L17 8.66667H13.6667V7.2775C13.6667 6.48167 13.8267 6.16667 14.5958 6.16667H17V2H13.8267C10.83 2 9.5 3.31917 9.5 5.84583V8.66667Z"></path>
                </svg>
              </a>

              <a
                className="p-2 hover:bg-green-500 rounded-full"
                href="#"
                aria-label="Twtter link"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  focusable="false"
                  viewBox="0 0 24 24"
                  alt="Twitter"
                >
                  <path d="M22 5.92417C21.2642 6.25083 20.4733 6.47083 19.6433 6.57C20.4908 6.0625 21.1417 5.25833 21.4475 4.3C20.655 4.77 19.7767 5.11167 18.8417 5.29583C18.0942 4.49833 17.0267 4 15.8467 4C13.1975 4 11.2508 6.47167 11.8492 9.0375C8.44 8.86667 5.41667 7.23333 3.3925 4.75083C2.3175 6.595 2.835 9.0075 4.66167 10.2292C3.99 10.2075 3.35667 10.0233 2.80417 9.71583C2.75917 11.6167 4.12167 13.395 6.095 13.7908C5.5175 13.9475 4.885 13.9842 4.24167 13.8608C4.76333 15.4908 6.27833 16.6767 8.075 16.71C6.35 18.0625 4.17667 18.6667 2 18.41C3.81583 19.5742 5.97333 20.2533 8.29 20.2533C15.9083 20.2533 20.2125 13.8192 19.9525 8.04833C20.7542 7.46917 21.45 6.74667 22 5.92417V5.92417Z"></path>
                </svg>
              </a>

              <a
                className="p-2 hover:bg-green-500 rounded-full"
                href="#"
                aria-label="LinkedIn link"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  focusable="false"
                  viewBox="0 0 24 24"
                  alt="LinkedIn"
                >
                  <path d="M6.15 4.08333C6.15 5.23417 5.225 6.16667 4.08333 6.16667C2.94167 6.16667 2.01667 5.23417 2.01667 4.08333C2.01667 2.93333 2.94167 2 4.08333 2C5.225 2 6.15 2.93333 6.15 4.08333ZM6.16667 7.83333H2V21.1667H6.16667V7.83333ZM12.8183 7.83333H8.67833V21.1667H12.8192V14.1675C12.8192 10.2758 17.8433 9.9575 17.8433 14.1675V21.1667H22V12.7242C22 6.1575 14.565 6.39667 12.8183 9.62917V7.83333Z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <ul className="text-gray-600 max-lg:pr-8 flex flex-col gap-1 md:text-xs xl:text-xl">
              <li className="text-gray-800 font-bold pb-2 text-xl md:text-lg xl:text-2xl">
                ENGAGE
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Create Account
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Download App
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Explore
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                New Routes
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-gray-600 max-lg:pr-8 flex flex-col gap-1  md:text-xs xl:text-xl">
              <li className="text-gray-800 font-bold pb-2 text-xl md:text-lg xl:text-2xl">
                ABOUT
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                About Us
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Blog
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Press
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                We are Hiring
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-gray-600 max-lg:pr-8 flex flex-col gap-1 md:text-xs xl:text-xl">
              <li className="text-gray-800 font-bold pb-2 text-xl md:text-lg xl:text-2xl">
                CUSTOMER SERVICE
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Contact Us
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Companies
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Terms And Conditions
              </li>
              <li className="hover:underline cursor-pointer hover:ease-in-out hover:duration-300">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-300 py-5">
          <p className="max-w-7xl mx-auto px-10 text-sm xl:text-base">
            © 2023 E-bus. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
