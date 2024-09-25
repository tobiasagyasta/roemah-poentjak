"use client";
import React from "react";
import Headroom from "react-headroom";
import Image from "next/image";
import { montserrat, openSans } from "@/app/fonts/fonts";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  return (
    <Headroom>
      <header
        className="flex flex-row justify-between items-center bg-white shadow p-4 h-12 md:h-20 lg:h-24 text-slate-900"
        style={{
          position: "sticky",
          top: 0,
        }}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src="/Logo.svg" // Ensure this is the correct path to your logo in the public folder
            alt="Logo"
            width={40} // Adjusted width for small screens
            height={40} // Adjusted height for small screens
            className="md:w-16 md:h-16 lg:w-20 lg:h-20" // Responsive classes for width and height
          />
        </div>

        {/* Center Links (Changes for Small Screens) */}
        <div
          className={`${montserrat.className} hidden sm:flex flex-row justify-center items-center text-xs text-center md:text-lg font-normal space-x-4 sm:space-x-8`}
        >
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className=" hover:underline">
            Location
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="space-x-6 hidden md:flex">
          <Link href="https://www.facebook.com/roemah.poentjak">
            <i className="fi fi-brands-facebook text-2xl"></i>
          </Link>
          <Link href="https://www.instagram.com/roemah_poentjak/">
            <i className="fi fi-brands-instagram text-2xl"></i>
          </Link>
          <Link href="mailto:roemahpoentjak@gmail.com">
            <i className="fi fi-rr-envelope text-2xl"></i>
          </Link>
        </div>

        {/* Responsive Menu for Small Screens */}
        <div className="sm:hidden flex-grow text-right">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <i className="fi fi-br-align-justify items-center text-lg"></i>
            </DrawerTrigger>
            <DrawerContent
              showBar={false}
              className={`${openSans.className} h-screen top-0 right-0 left-auto mt-0 w-1/2 rounded-none`}
            >
              <aside>
                <nav className="mt-8 flex flex-col items-center space-y-4 pb-3 border-b border-black/10">
                  <a href="#" className="hover:underline text-base">
                    About Us
                  </a>
                  <a href="#" className="hover:underline text-base">
                    Location
                  </a>
                  <a href="#" className="hover:underline text-base">
                    Contact
                  </a>
                  <div className="flex space-x-6 mt-6">
                    <Link href="https://www.facebook.com/roemah.poentjak">
                      <i className="fi fi-brands-facebook text-xl"></i>
                    </Link>
                    <Link href="https://www.instagram.com/roemah_poentjak/">
                      <i className="fi fi-brands-instagram text-xl"></i>
                    </Link>
                    <Link href="mailto:roemahpoentjak@gmail.com">
                      <i className="fi fi-rr-envelope text-xl"></i>
                    </Link>
                  </div>
                </nav>
              </aside>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
