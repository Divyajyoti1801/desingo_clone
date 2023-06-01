"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import useCountries from "../hooks/useCountries";

interface LocationContainerProps {
  officeName: string;
  address1: string;
  address2: string;
  phone: string;
  mail: string;
  reverse?: boolean;
  location: string;
}

const LocationContainer: React.FC<LocationContainerProps> = ({
  officeName,
  address1,
  address2,
  phone,
  mail,
  reverse,
  location,
}) => {
  const { getByValue } = useCountries();
  const place = getByValue(location);
  const Map = useMemo(() => dynamic(() => import("./Map"), { ssr: false }), []);
  return (
    <div
      className={`w-full flex flex-col  ${
        reverse ? `lg:flex-row` : `lg:flex-row-reverse`
      } items-center justify-between md:gap-4 lg:h-[40vh]`}
    >
      <div className="flex items-center justify-center w-full h-[30vh] lg:h-full lg:w-[30%] md:rounded-2xl overflow-hidden ">
        <Map center={place?.latlng} />
      </div>
      <div className="flex flex-col items-center justify-center w-full lg:h-full lg:w-[70%] bg-customLightPeach/20 md:rounded-2xl overflow-hidden px-[6rem] py-[6rem] lg:[py-2] gap-[35px] bg-[url('/images/shared/desktop/bg-pattern-two-circles.svg')] bg-no-repeat bg-contain">
        <h1 className="w-full text-center md:text-left text-subHeading text-customPeach">
          {location}
        </h1>
        <div className="w-full flex flex-col md:flex-row item-center justify-center gap-4">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-full text-center md:text-left font-medium text-customBlack">
              {officeName}
            </p>
            <p className="w-full text-center md:text-left text-customBlack">
              {address1}
            </p>
            <p className="w-full text-center md:text-left text-customBlack">
              {address2}
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-full text-center md:text-left font-medium text-customBlack">
              Contact
            </p>
            <p className="w-full text-center md:text-left text-customBlack">
              P : {phone}
            </p>
            <p className="w-full text-center md:text-left text-customBlack">
              M : {mail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContainer;
