import { useState } from "react";
import PropTypes from "prop-types";
import SingIn from "./SingIn";
import SingUp from "./SingUp";

function Model({ modelName, modelCss }) {
  const [showModal, setShowModal] = useState(false);
  const [sing, setSing] = useState(true);

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className={modelCss}
          type="button"
          onClick={() => setShowModal(true)}
        >
          {modelName}
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen">
              <div className="relative mx-auto  rounded-md shadow-lg">
                <div className="sm:flex">
                  {/* Body */}
                  <section className="dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center mx-auto lg:py-0">
                      <div className="md:w-[30rem] max-md:mx-3 py-10 px-5 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <form className="space-y-4 md:space-y-6" action="#">
                            {/* _________________Sing in_______________ */}
                            {sing ? (
                              <SingIn />
                            ) : (
                              // {/* _________________Sing up_______________ */}
                              <SingUp />
                            )}
                          </form>

                          <div>
                            {sing ? (
                              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <button
                                  onClick={() => setSing(!sing)}
                                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                  Sign up
                                </button>
                              </p>
                            ) : (
                              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account?{" "}
                                <button
                                  onClick={() => setSing(!sing)}
                                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                  Login here
                                </button>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

Model.propTypes = {
  modelName: PropTypes.string.isRequired,
  modelCss: PropTypes.string.isRequired,
};

export default Model;
