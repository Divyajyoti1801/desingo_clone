"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navigator = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = useCallback(() => {
    setIsOpen((value) => true);
  }, []);
  const menuClose = useCallback(() => {
    setIsOpen((value) => false);
  }, []);

  return (
    <div className="relative lg:px-[10.25rem] px-[2.375rem] flex flex-row justify-between py-[64px] gap-4">
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/images/shared/desktop/logo-dark.png"
          width={195}
          height={70}
          alt="Designo Logo"
        />
      </div>
      <div className="hidden md:flex flex-row gap-[2.625rem] justify-center items-center">
        <Link
          href="/about"
          className="text-bodyText text-customBlack tracking-headerSpacing1 border-b-[1px] border-transparent hover:border-customBlack transition"
        >
          OUR COMPANY
        </Link>
        <Link
          href="/location"
          className="text-bodyText text-customBlack border-b-[1px] tracking-headerSpacing1 border-transparent hover:border-customBlack transition"
        >
          LOCATIONS
        </Link>
        <Link
          href="/contact"
          className="text-bodyText text-customBlack border-b-[1px] tracking-headerSpacing1 border-transparent hover:border-customBlack transition"
        >
          CONTACT
        </Link>
      </div>
      <div className="md:hidden h-full flex flex-row justify-center items-center">
        {isOpen ? (
          <AiOutlineClose
            size={28}
            className="hover:text-customDarkGrey cursor-pointer"
            onClick={menuClose}
          />
        ) : (
          <AiOutlineMenu
            size={28}
            className="hover:text-customDarkGrey cursor-pointer"
            onClick={menuOpen}
          />
        )}
        {isOpen && (
          <div className="absolute w-full top-full left-0 flex flex-col  justify-start items-start bg-customBlack gap-[2.4rem] px-[2.4rem] py-[4.8rem] z-100">
            <Link
              href="/about"
              className="text-lightHeading text-white tracking-headerSpacing1 border-b-[1px] border-transparent hover:border-customBlack transition"
            >
              OUR COMPANY
            </Link>
            <Link
              href="/location"
              className="text-lightHeading text-white border-b-[1px] tracking-headerSpacing1 border-transparent hover:border-customBlack transition"
            >
              LOCATIONS
            </Link>
            <Link
              href="/contact"
              className="text-lightHeading text-white border-b-[1px] tracking-headerSpacing1 border-transparent hover:border-customBlack transition"
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigator;
