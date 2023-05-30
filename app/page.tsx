/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full px-[23px] pt-[23px] bg-customPeach flex flex-col justify-center items-center rounded-lg bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-no-repeat bg-cover bg-left">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-center w-full font-medium text-subHeading text-white leading-tight mb-4">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="w-full text-center text-bodyText text-customLightGrey mb-4">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="bg-white hover:bg-white/50 cursor-pointer p-4 rounded-lg font-bold hover:text-white transition shadow-md">
          LEARN MORE
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/images/home/desktop/image-hero-phone.png"
          width={500}
          height={500}
          alt="Phone Illustration"
        />
        {/* <img
          src="/images/home/desktop/image-hero-phone.png"
          alt="Phone Illustration"
          className="translate-y-10"
        /> */}
      </div>
    </div>
  );
};

export default Home;
