"use client";
import { useRouter } from "next/navigation";
import { AiOutlineRight } from "react-icons/ai";
import Floater from "../components/Floater";
import ShowCard from "../components/ShowCard";

const WebDesign = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[160px] mb-10">
      <Floater
        title="Web Design"
        content="We build website that server as a powerful marketing tools and bring memorable brand experiences."
        cta={false}
      />
      <div className="flex flex-col gap-8 mx-[2.375rem] lg:mx-0">
        <ShowCard
          title="Express"
          content="A multi-carrier shipping website for ecommerce business"
          image="/images/web-design/desktop/image-express.jpg"
        />
        <ShowCard
          title="Transfer"
          content="Site for low-cost money transfers and sending money within seconds"
          image="/images/web-design/desktop/image-transfer.jpg"
        />
        <ShowCard
          title="Photon"
          content="A state-of-the-art music player with high-resolution audio and DSP effects."
          image="/images/web-design/desktop/image-photon.jpg"
        />
        <ShowCard
          title="Builder"
          content="A state-of-the-art music player with high-resolution audio and DSP effects."
          image="/images/web-design/desktop/image-builder.jpg"
        />
        <ShowCard
          title="Blogr"
          content="A state-of-the-art music player with high-resolution audio and DSP effects."
          image="/images/web-design/desktop/image-blogr.jpg"
        />
        <ShowCard
          title="Camp"
          content="A state-of-the-art music player with high-resolution audio and DSP effects."
          image="/images/web-design/desktop/image-camp.jpg"
        />
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 px-[2.375rem] lg:px-0">
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

      <Floater
        title="Let's talk about your project"
        content="Ready to take it to next level? Contact us today and find out how our expertise can help your business grow."
        cta={true}
        ctaText="Get in touch"
      />
    </div>
  );
};

export default WebDesign;
