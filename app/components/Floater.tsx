const Floater = () => {
  return (
    <div className="w-[70vw] flex flex-col md:flex-row justify-between items-center bg-customPeach lg:px-[94px] px-[2.375rem] py-[72px] rounded-lg gap-10 md:gap-0 bg-[url('/images/shared/desktop/bg-pattern-call-to-action.svg')] bg-auto bg-no-repeat bg-right translate-y-[20%] z-10 mb-10">
      <div className="flex w-full lg:w-[60%] flex-col items-center justify-center">
        <h1 className="w-full text-center md:text-left text-subHeading font-medium tracking-tighter text-white">
          Let’s talk about your project
        </h1>
        <p className="w-full text-center md:text-left text-white">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="text-customBlack p-4 cursor-pointer bg-white hover:bg-white/50 hover:text-white rounded-lg transition">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Floater;
