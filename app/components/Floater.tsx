import { useRouter } from "next/navigation";

interface FloaterParams {
  title?: string;
  content?: string;
  cta?: boolean;
  ctaText?: string;
}

const Floater: React.FC<FloaterParams> = ({ title, content, cta, ctaText }) => {
  const router = useRouter();
  return (
    <div
      className={`w-full flex flex-col md:flex-row ${
        cta ? "justify-between" : "justify-center"
      } items-center bg-customPeach lg:px-[94px] px-[2.375rem] py-[72px]  md:rounded-lg gap-10 md:gap-0 bg-[url('/images/shared/desktop/bg-pattern-call-to-action.svg')] bg-auto bg-no-repeat bg-right`}
    >
      <div className="flex w-full lg:w-[60%] flex-col items-center justify-center gap-5">
        <h1
          className={`w-full text-center ${
            cta ? "md:text-left" : "md:text-center"
          } text-subHeading font-medium tracking-tighter text-white`}
        >
          {title}
        </h1>
        <p
          className={`w-full text-center ${
            cta ? "md:text-left" : "md:text-center"
          } text-white`}
        >
          {content}
        </p>
      </div>
      {cta && (
        <div className="flex items-center justify-center">
          <button
            className="text-customBlack p-4 cursor-pointer bg-white hover:bg-white/50 hover:text-white rounded-lg transition uppercase"
            onClick={() => router.push("/contact")}
          >
            {ctaText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Floater;
