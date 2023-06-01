"use client";
import Floater from "../components/Floater";
import LocationContainer from "../components/LocationContainer";

const Location = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[160px] mb-10">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <LocationContainer
          officeName="Designo Central office"
          address1="3886 Wellington Street"
          address2="Toronto, Ontario M9C 3J5"
          location="Canada"
          phone="+1 253-863-8967"
          mail="contact@designo.co"
        />
        <LocationContainer
          officeName="Designo AU office"
          address1="19 Balonne Street"
          address2="New South Wales 2443"
          location="Australia"
          phone="(02) 6720 9092"
          mail="contact@designo.au"
          reverse
        />
        <LocationContainer
          officeName="Designo UK office"
          address1="13 Colorado Way"
          address2="Rhyd-y-fro SA8 9GA"
          location="United Kingdom"
          phone="078 3115 1400"
          mail="contact@designo.uk"
        />
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

export default Location;
