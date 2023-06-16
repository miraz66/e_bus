import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Button from "../utils/Button";

const navigation = [{ name: "", href: "/" }];

// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
  return (
    <>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto bg-white max-full py-3 px-2 2xl:py-5 sm:px-8 lg:px-10">
              <div className="relative md:max-w-2xl lg:max-w-4xl xl:max-w-5xl  2xl:max-w-7xl   mx-auto flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="">
                    <a
                      className="text-green-400 font-bold text-3xl lg:text-5xl 2xl:text-7xl"
                      href=""
                    >
                      E-Bus
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              "rounded-md  text-lg font-medium" +
                              (!isActive
                                ? " no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                : " no-underline bg-gray-900 text-white")
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static 
                              sm:inset-auto sm:ml-6 sm:pr-0 gap-3 "
                >
                  <Button
                    name={"Login"}
                    css={
                      " max-sm:hidden px-10  py-2 text-xl 2xl:text-2xl 2xl:px-14 2xl:py-4   "
                    }
                  />

                  <button type="button" className="text-gray-500">
                    <span className="sr-only">View notifications</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-700">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "block rounded-md px-3 py-2 text-base font-medium" +
                        (!isActive
                          ? " no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                          : " no-underline bg-gray-900 text-white")
                      );
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <Button
                  name={"Login"}
                  css={" text-center px-10 py-2 text-xl "}
                />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {children}
    </>
  );
}
