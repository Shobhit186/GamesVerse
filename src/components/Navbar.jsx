import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoSvg from "../assets/logo.svg";
import { navItems } from "../constants/constants";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const toggleMobileView = () => {
    setMobileView(!mobileView);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img className="w-10 h-10 mr-2" src={logoSvg} alt="logo" />
            <span className="tracking-tight text-lg bg-gradient-to-r from-cyan-500 to-red-500 bg-clip-text text-transparent">
              GamesVerse
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-12 justify-center items-center">
            <SignedOut>
              <a
                href="#"
                className="py-2 px-3 border rounded-md hover:text-black bg-gradient-to-r from-orange-500 to-red-500"
              >
                <SignInButton />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3 border rounded-md hover:text-black"
              >
                <SignUpButton />
              </a>
            </SignedOut>
            <SignedIn>
              <a
                href="#"
                className="py-2 px-3 border rounded-md hover:text-black bg-gradient-to-r from-orange-500 to-red-500"
              >
                <UserButton />
              </a>
            </SignedIn>
          </div>
          <div className="lg:hidden flex justify-end md:flex">
            <button onClick={toggleMobileView} className="mr-6">
              {mobileView ? <X /> : <Menu />}
            </button>

            <SignedIn>
              <a
                href="#"
                className="py-2 px-3 border rounded-md hover:text-black bg-gradient-to-r from-orange-500 to-red-500"
              >
                <UserButton />
              </a>
            </SignedIn>
          </div>
        </div>
        {mobileView && (
          <div className="fixed z-20 right-0 flex flex-col items-center justify-center bg-neutral-900 lg:hidden p-12 w-full">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.path} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-2">
              <SignedOut>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:text-black px-3 py-2 border rounded-md"
                >
                  <SignInButton />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-black py-2 px-3 border rounded-md"
                >
                  <SignUpButton />
                </a>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
