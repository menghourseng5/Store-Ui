import { useState } from "react";

function Header() {
  const [isActiveNavbar, setActiveNavbar] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="bg-white border-b border-gray-200 py-4 font-jost flex justify-between items-center px-8 lg:px-40">
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setActiveNavbar(true)}
            className="lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <h2 className="font-bold text-lg">Master IT Store</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {menus.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="hover:underline decoration-yellow-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-3">
          {[
            "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
            "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
            "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
          ].map((d, i) => (
            <button key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-6 hover:text-yellow-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={d} />
              </svg>
            </button>
          ))}
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`${
          isActiveNavbar ? "left-0" : "-left-full"
        } fixed top-0 z-[999] w-[260px] min-h-screen bg-gray-900 text-white
        px-4 pt-8 transition-all duration-300`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setActiveNavbar(false)}
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col mt-6 space-y-2">
          {menus.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setActiveNavbar(false)}
              className="px-3 py-2 rounded-lg hover:bg-gray-700 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
