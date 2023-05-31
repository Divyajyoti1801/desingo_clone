import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col lg:px-[10.25rem] px-[2.375rem] bg-customBlack py-[60px] gap-[40px]">
      <div className="flex flex-col lg:justify-between lg:items-center lg:flex-row md:border-b-[1px] md:border-customDarkGrey md:pb-[40px] gap-[2.625rem]">
        <div className="flex items-center justify-center pb-[40px] border-b-[1px] border-customDarkGrey md:border-b-0 lg:pb-0">
          <Image
            src="/images/shared/desktop/logo-light.png"
            alt="Designo Logo"
            height={200}
            width={200}
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-[2.625rem]">
          <Link
            href="/about"
            className="text-bodyText text-white tracking-headerSpacing1 border-b-[1px] border-transparent hover:text-customDarkGrey transition"
          >
            OUR COMPANY
          </Link>
          <Link
            href="/location"
            className="text-bodyText text-white border-b-[1px] tracking-headerSpacing1 border-transparent hover:text-customDarkGrey transition"
          >
            LOCATIONS
          </Link>
          <Link
            href="/contact"
            className="text-bodyText text-white border-b-[1px] tracking-headerSpacing1 border-transparent hover:text-customDarkGrey transition"
          >
            CONTACT
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[48px]">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-customDarkGrey font-medium">
            Designo Central Office
          </h3>
          <p className="text-customDarkGrey">3886 Wellington Street</p>
          <p className="text-customDarkGrey">Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-customDarkGrey font-medium">
            Contact Us (Central Office)
          </h3>
          <p className="text-customDarkGrey">P : +1 253-863-8967</p>
          <p className="text-customDarkGrey">M : contact@designo.co</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <AiFillFacebook
            size={30}
            className="cursor-pointer text-customPeach hover:text-customLightPeach transition"
          />
          <BsYoutube
            size={30}
            className="cursor-pointer text-customPeach hover:text-customLightPeach transition"
          />
          <BsTwitter
            size={30}
            className="cursor-pointer text-customPeach hover:text-customLightPeach transition"
          />
          <BsPinterest
            size={30}
            className="cursor-pointer text-customPeach hover:text-customLightPeach transition"
          />
          <BsInstagram
            size={30}
            className="cursor-pointer text-customPeach hover:text-customLightPeach transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
