"use client";

import { useRouter } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";
import Floater from "../components/Floater";
import ShowCard from "../components/ShowCard";

const GraphicDesign = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-between gap-[160px] mb-10">
      <Floater
        title="Graphic Design"
        content="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        cta={false}
      />
      <div className="flex flex-col lg:grid  lg:grid-cols-3 gap-8 mx-[2.375rem] lg:mx-0">
        <ShowCard
          title="Tim Brown"
          content="A book cover designed of Tim Brown's new release, 'Change'"
          image="/images/graphic-design/desktop/image-change.jpg"
        />
        <ShowCard
          title="Boxed Water"
          content="A simple packaging concept made for Boxed Water, 'Change'"
          image="/images/graphic-design/desktop/image-boxed-water.jpg"
        />
        <ShowCard
          title="Science !"
          content="A poster made in collaboration with the Federal Art Project, 'Change'"
          image="/images/graphic-design/desktop/image-science.jpg"
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

export default GraphicDesign;
