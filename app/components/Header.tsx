import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex space-x-5">
                <Link
                  href="https://flowbite.com/"
                  className="flex items-center space-x-3 rtl:space-x-reverse "
                >
                  <Logo />
                </Link>
                <div
                  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                  id="navbar-cta"
                >
                  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 text-sm rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                    <li>
                      <Link
                        href="#"
                        className="block py-2 px-3 md:p-0  bg-blue-700 rounded-sm md:bg-transparent text-[#7E3AF2]"
                        aria-current="page"
                      >
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:text-[#7E3AF2] md:hover:bg-transparent    md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Marketplace
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-[#7E3AF2]"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-[#7E3AF2] md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Team
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Button primary={false}>Login</Button>
              <Button primary={true}>Get Started</Button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            
          </div>
        </nav>
      </header>
    </div>
  );
}