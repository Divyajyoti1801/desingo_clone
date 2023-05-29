"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownHandler = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative flex flex-row justify-between items-center py-[50px] gap-5">
      <Link href="/" className="flex flex-row justify-center items-center">
        <Image
          src="/images/shared/desktop/logo-dark.png"
          width={196}
          height={24}
          alt="Designo Logo"
        />
      </Link>
      <nav className="sm:flex flex-row justify-between items-center gap-10 hidden">
        <Link
          href="/about"
          className="text-sm text-black cursor-pointer hover:text-slate-500 transition-all"
        >
          OUR COMPANY
        </Link>
        <Link
          href="/location"
          className="text-sm text-black hover:text-slate-500 cursor-pointer"
        >
          LOCATIONS
        </Link>
        <Link
          href="/contact"
          className="text-sm text-black hover:text-slate-500 cursor-pointer"
        >
          CONTACT
        </Link>
      </nav>
      <div className="block sm:hidden">
        <AiOutlineMenu
          className="cursor-pointer"
          onClick={dropdownHandler}
          size="30px"
        />
        {isOpen && (
          <div className="absolute top-[100%] right-0 bg-black flex flex-col gap-3 w-[100%] p-4 z-10 rounded shadow-md shadow-slate-700">
            <Link
              href="/about"
              className="text-sm text-white cursor-pointer hover:text-slate-500 transition-all"
            >
              OUR COMPANY
            </Link>
            <Link
              href="/location"
              className="text-sm text-white hover:text-slate-500 cursor-pointer transition-all"
            >
              LOCATIONS
            </Link>
            <Link
              href="/contact"
              className="text-sm text-white hover:text-slate-500 cursor-pointer transition-all"
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
