/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";
import Floater from "./components/Floater";

const Home = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[160px] mb-20">
      <div className="w-full px-[23px] pt-[60px] bg-customPeach flex flex-col justify-center items-center md:rounded-lg bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-no-repeat bg-contain overflow-hidden bg-right xl:flex-row  xl:px-[90px] xl:py-[60px]">
        <div className="w-full flex flex-col justify-center items-center xl:items-start gap-[30px]">
          <h1 className="text-center w-full font-medium text-subHeading text-white leading-tight xl:text-left">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="w-full text-center text-bodyText text-customLightGrey xl:text-left">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button
            className="bg-white hover:bg-white/50 cursor-pointer p-4 rounded-lg font-bold hover:text-white transition shadow-md"
            onClick={() => router.push("/about")}
          >
            LEARN MORE
          </button>
        </div>
        <div className="relative h-[460px]">
          <Image
            src="/images/home/desktop/image-hero-phone.png"
            width={700}
            height={500}
            alt="Phone Illustration"
          />
        </div>
      </div>
      <div className="w-full grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 gap-[28px] px-[2.375rem] md:px-0">
        <div
          className="w-full h-[250px] gap-[24px] bg-[url('/images/home/mobile/image-web-design.jpg')] sm:bg-[url('/images/home/tablet/image-web-design.jpg')] md:bg-[url('/images/home/desktop/image-web-design-large.jpg')] bg-no-repeat bg-cover bg-center rounded-lg lg:row-span-full lg:h-full"
          onClick={() => router.push("/web-design")}
        >
          <div className="flex flex-col w-full h-full justify-center items-center rounded-lg cursor-pointer hover:bg-customLightPeach/40 transition">
            <h1 className="text-subHeading text-white font-medium tracking-headerSpacing1 text-center">
              WEB DESIGN
            </h1>
            <p className="text-white text-bodyText tracking-headerSpacing1 flex flex-row justify-center items-center gap-2">
              VIEW PROJECTS
              <AiOutlineRight className="text-customPeach" />
            </p>
          </div>
        </div>
        <div
          className="w-full h-[250px] gap-[24px] bg-[url('/images/home/mobile/image-app-design.jpg')] sm:bg-[url('/images/home/tablet/image-app-design.jpg')] md:bg-[url('/images/home/desktop/image-app-design.jpg')] bg-no-repeat bg-cover bg-center rounded-lg transition"
          onClick={() => router.push("/app-design")}
        >
          <div className="flex flex-col w-full h-full justify-center items-center rounded-lg cursor-pointer hover:bg-customLightPeach/40">
            <h1 className="text-subHeading text-white font-medium tracking-headerSpacing1 text-center">
              APP DESIGN
            </h1>
            <p className="text-white text-bodyText tracking-headerSpacing1 flex flex-row justify-center items-center gap-2">
              VIEW PROJECTS
              <AiOutlineRight className="text-customPeach" />
            </p>
          </div>
        </div>
        <div
          className="w-full h-[250px] gap-[24px] bg-[url('/images/home/mobile/image-graphic-design.jpg')] sm:bg-[url('/images/home/tablet/image-graphic-design.jpg')] md:bg-[url('/images/home/desktop/image-graphic-design.jpg')] bg-no-repeat bg-cover bg-center rounded-lg transition"
          onClick={() => router.push("/graphic-design")}
        >
          <div className="flex flex-col w-full h-full justify-center items-center rounded-lg cursor-pointer hover:bg-customLightPeach/40">
            <h1 className="text-subHeading text-white font-medium tracking-headerSpacing1 text-center">
              GRAPHIC DESIGN
            </h1>
            <p className="text-white text-bodyText tracking-headerSpacing1 flex flex-row justify-center items-center gap-2">
              VIEW PROJECTS
              <AiOutlineRight className="text-customPeach" />
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 px-[2.375rem] md:px-0">
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-cover bg-center">
            <Image
              src="/images/home/desktop/illustration-passionate.svg"
              width={200}
              height={200}
              alt="Passionate"
              className="lg:w-{200} lg:h-{200}"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-center md:text-left lg:text-center w-full text-lightHeading uppercase tracking-headerSpacing2">
              Passionate
            </h2>
            <p className="text-center md:text-left lg:text-center w-full text-bodyText">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-cover bg-center">
            <Image
              src="/images/home/desktop/illustration-resourceful.svg"
              width={200}
              height={200}
              alt="Resourceful"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-center md:text-left lg:text-center w-full text-lightHeading uppercase tracking-headerSpacing2">
              Resourceful
            </h2>
            <p className="text-center md:text-left lg:text-center w-full text-bodyText">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-cover bg-center">
            <Image
              src="/images/home/desktop/illustration-friendly.svg"
              width={200}
              height={200}
              alt="Friendly"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-center md:text-left lg:text-center w-full text-lightHeading uppercase tracking-headerSpacing2">
              Friendly
            </h2>
            <p className="text-center md:text-left lg:text-center w-full text-bodyText">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Floater
          title="Let's talk about your project"
          content="Ready to take it to next level? Contact us today and find out how our expertise can help your business grow."
          cta={true}
          ctaText="Get in touch"
        />
      </div>
    </div>
  );
};

export default Home;
