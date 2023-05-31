"use client";
import Image from "next/image";
import Floater from "../components/Floater";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[160px] mb-10">
      <div className="w-full lg:h-[30rem] flex flex-col-reverse items-center justify-center lg:flex-row mx-[2.375rem] md:mx-0 md:rounded-2xl overflow-hidden">
        <div className="flex flex-col gap-8 items-center justify-center lg:pl-[95px] p-[60px] lg:pr-5 bg-customPeach lg:h-full md:h-[50%] h-auto w-full lg:w-[60%] bg-[url('/images/about/mobile/bg-pattern-hero-about-mobile.svg')] sm:bg-[url('/images/about/desktop/bg-pattern-hero-about-desktop.svg')] bg-no-repeat bg-cover bg-top-right">
          <h1 className="text-white text-subHeading font-medium w-full text-center lg:text-left">
            About Us
          </h1>
          <p className="w-full text-white text-bodyText text-center lg:text-left">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients audiences.
          </p>
        </div>
        <div className="w-full h-[20rem] lg:h-full lg:w-[40%] bg-[url('/images/about/mobile/image-about-hero.jpg')] md:bg-[url('/images/about/tablet/image-about-hero.jpg')] lg:bg-[url('/images/about/desktop/image-about-hero.jpg')] bg-no-repeat bg-cover" />
      </div>
      <div className="w-full lg:h-[30rem] flex flex-col items-center justify-center lg:flex-row mx-[2.375rem] md:mx-0 md:rounded-2xl overflow-hidden">
        <div className="w-full h-[20rem] lg:h-full lg:w-[40%] bg-[url('/images/about/mobile/image-world-class-talent.jpg')] md:bg-[url('/images/about/tablet/image-world-class-talent.jpg')] lg:bg-[url('/images/about/desktop/image-world-class-talent.jpg')] bg-no-repeat bg-cover" />
        <div className="flex flex-col gap-8 items-center justify-center lg:pr-[95px] p-[60px] lg:pl-8 bg-customLightPeach/30 lg:h-full md:h-[50%] h-auto w-full lg:w-[60%] bg-[url('/images/about/mobile/bg-pattern-hero-about-mobile.svg')] sm:bg-[url('/images/about/desktop/bg-pattern-hero-about-desktop.svg')] bg-no-repeat bg-cover bg-right">
          <h1 className="text-customPeach text-subHeading font-medium w-full text-center lg:text-left">
            World-class Talent
          </h1>
          <p className="w-full text-customBlack text-bodyText text-center lg:text-left">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="w-full text-customBlack text-bodyText text-center lg:text-left">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center gap-10 justify-between">
        <div className="flex flex-col items-center justify-between gap-5">
          <div className="flex item-center justify-between bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-cover">
            <Image
              src="/images/shared/desktop/illustration-canada.svg"
              alt="Canada"
              width={200}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-customBlack text-lightHeading tracking-headerSpacing1 uppercase">
              CANADA
            </h1>
            <button className="p-4 bg-customPeach text-white hover:bg-customLightPeach cursor-pointer rounded-lg transition">
              SEE LOCATION
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-5">
          <div className="flex item-center justify-between bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-cover">
            <Image
              src="/images/shared/desktop/illustration-australia.svg"
              alt="Australia"
              width={200}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <h1 className="text-customBlack text-lightHeading tracking-headerSpacing1 uppercase">
              Australia
            </h1>
            <button className="p-4 bg-customPeach text-white hover:bg-customLightPeach cursor-pointer rounded-lg transition">
              SEE LOCATION
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-5">
          <div className="flex item-center justify-between bg-[url('/images/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-cover">
            <Image
              src="/images/shared/desktop/illustration-united-kingdom.svg"
              alt="UK"
              width={200}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-2">
            <h1 className="text-customBlack text-lightHeading tracking-headerSpacing1 uppercase">
              United Kingdom
            </h1>
            <button className="p-4 bg-customPeach text-white hover:bg-customLightPeach cursor-pointer rounded-lg transition">
              SEE LOCATION
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:h-[30rem] flex flex-col items-center justify-center lg:flex-row mx-[2.375rem] md:mx-0 md:rounded-2xl overflow-hidden">
        <div className="w-full h-[20rem] lg:h-full lg:w-[40%] bg-[url('/images/about/mobile/image-real-deal.jpg')] md:bg-[url('/images/about/tablet/image-real-deal.jpg')] lg:bg-[url('/images/about/desktop/image-real-deal.jpg')] bg-no-repeat bg-cover" />
        <div className="flex flex-col gap-8 items-center justify-center lg:pr-[95px] p-[60px] lg:pl-8 bg-customLightPeach/30 lg:h-full md:h-[50%] h-auto w-full lg:w-[60%] bg-[url('/images/about/mobile/bg-pattern-hero-about-mobile.svg')] sm:bg-[url('/images/about/desktop/bg-pattern-hero-about-desktop.svg')] bg-no-repeat bg-cover bg-right">
          <h1 className="text-customPeach text-subHeading font-medium w-full text-center lg:text-left">
            The real deal
          </h1>
          <p className="w-full text-customBlack text-bodyText text-center lg:text-left">
            As strategic partners in our clients businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="w-full text-customBlack text-bodyText text-center lg:text-left">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
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

export default About;
