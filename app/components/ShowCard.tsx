import Image from "next/image";

interface ShowCardProps {
  title: string;
  content: string;
  image: string;
}

const ShowCard: React.FC<ShowCardProps> = ({ title, content, image }) => {
  return (
    <div className="w-full h-[60vh] lg:h-[478px] flex flex-col md:flex-row lg:flex-col rounded-2xl overflow-hidden cursor-pointer hover:bg-customLightPeach hover:text-white transition">
      <div className="relative aspect-square rounded-t-2xl lg:h-[320px]">
        <Image
          src={image}
          alt={`${title}-img`}
          fill
          className="object-cover h-[full]"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-[38px] bg-customLightPeach/20  gap-5 ">
        <h1 className="w-full text-center text-customPeach text-lightHeading tracking-headerSpacing2 uppercase">
          {title}
        </h1>
        <p className="w-full text-center text-customBlack text-bodyText  transition">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
