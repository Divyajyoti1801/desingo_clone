import Image from "next/image";

const HomePage = () => {
  return (
    <main className="flex flex-col justify-center items-center ">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-peach rounded-lg px-[95px] lg:py-0 py-20 bg-[url('/images/home/desktop/bg-pattern-hero-home.svg')] bg-contain bg-no-repeat bg-right gap-14 w-full overflow-hidden">
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-3xl text-white font-medium ">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-md text-white font-light">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
        </div>
        <div className="flex items-center sm:justify-end justify-center w-full h-full">
          <Image
            src="/images/home/desktop/image-hero-phone.png"
            width={500}
            height={500}
            alt="Phone Image"
            className="w-[100%] height-[100%] sm:translate-y-20 sm:translate-x-10"
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
