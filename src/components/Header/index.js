import React from "react";
import Link from "next/link";
import LogoPR from "images/logo.svg";

export default function Header() {
  return (
    <div className="absolute z-10 w-full py-12">
      <header className="max-w-7x1 mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-28">
            <LogoPR className="logo-style-1" />
          </div>
          {/* Navbar */}
          <div className="w-auto">
            <ul className="flex items-center">
              <li className="">
                <Link href="/destinations" legacyBehavior>
                  <a className="px-9 text-gray-800">Destinations</a>
                </Link>
              </li>
              <li className="">
                <Link href="/hotels" legacyBehavior>
                  <a className="px-9 text-gray-800">Hotels</a>
                </Link>
              </li>
              <li className="">
                <Link href="/flights" legacyBehavior>
                  <a className="px-9 text-gray-800">Flights</a>
                </Link>
              </li>
              <li className="">
                <Link href="/bookings" legacyBehavior>
                  <a className="px-9 text-gray-800">Bookings</a>
                </Link>
              </li>
              <li className="">
                <Link href="/login" legacyBehavior>
                  <a className="px-9 text-gray-800">Login</a>
                </Link>
              </li>
              <li className="">
                <Link href="/sign-up" legacyBehavior>
                  <a className="px-5 py-1 border border-gray-800 rounded-md mx-3 text-gray-800">
                    Sign up
                  </a>
                </Link>
              </li>
              <li className="">
                <button className="">
                  <a className="px-9 text-gray-800 relative">
                    EN
                    <span className="absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-6"></span>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
