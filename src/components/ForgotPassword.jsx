export default function ForgotPassword() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-16">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="md:w-[30rem] max-md:mx-3 px-10 py-14 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Forgot your password?
          </h2>
          <p className="pb-10 pt-2 text-gray-500 text-sm">
            Don't fret! Just type in your email and we will send you a code to
            reset your password!
          </p>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div className="flex items-center">
              <div className="flex items-start">
                <input
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className=""
                  required="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="pt-0">
                  I accept the{" "}
                  <a href="#" className="text-gray-500 dark:text-gray-300">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="rounded-md active:shadow shadow-md bg-gradient-to-br from-sky-300 via-green-300 to-sky-300 w-full py-2"
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
