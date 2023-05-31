"use client";
import { useRouter } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";
import Floater from "../components/Floater";
import ShowCard from "../components/ShowCard";

const AppDesign = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between gap-[160px] mb-10">
      <Floater
        title="App Design"
        content="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        cta={false}
      />
      <div className="flex flex-col lg:grid  lg:grid-cols-3 gap-8 mx-[2.375rem] lg:mx-0">
        <ShowCard
          title="Airfilter"
          content="Solving the problem of poor indoor air quality by filtering the air"
          image="/images/app-design/desktop/image-airfilter.jpg"
        />
        <ShowCard
          title="Eyecam"
          content="Product that lets you edit you favorite photos and videos at any time"
          image="/images/app-design/desktop/image-eyecam.jpg"
        />
        <ShowCard
          title="Faceit"
          content="Get to meet your favorite internet superstar with the faceit app"
          image="/images/app-design/desktop/image-faceit.jpg"
        />
        <ShowCard
          title="Todo"
          content="A Todo app that features cloud sync with light and dark mode"
          image="/images/app-design/desktop/image-todo.jpg"
        />
        <ShowCard
          title="LOOPSTUDIOS"
          content="A VR experience app made for Loopstudios"
          image="/images/app-design/desktop/image-loopstudios.jpg"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 px-[2.375rem] lg:px-0">
        <div
          className="w-full h-[250px] gap-[24px] bg-[url('/images/home/mobile/image-web-design.jpg')] sm:bg-[url('/images/home/tablet/image-web-design.jpg')] md:bg-[url('/images/home/desktop/image-web-design-large.jpg')] bg-no-repeat bg-cover bg-center rounded-lg"
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
      <Floater
        title="Let's talk about your project"
        content="Ready to take it to next level? Contact us today and find out how our expertise can help your business grow."
        cta={true}
        ctaText="Get in touch"
      />
    </div>
  );
};

export default AppDesign;
