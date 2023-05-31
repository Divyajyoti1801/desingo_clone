import Image from "next/image";

interface ShowCardProps {
  title: string;
  content: string;
  image: string;
}

const ShowCard: React.FC<ShowCardProps> = ({ title, content, image }) => {
  return (
    <div className="w-full lg:h-[60vh] flex flex-col lg:flex-row rounded-2xl overflow-hidden">
      <div className="relative aspect-square rounded-t-2xl">
        <Image src={image} alt={`${title}-img`} fill className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center p-[38px] bg-customLightPeach/20 gap-5">
        <h1 className="w-full text-center text-customPeach text-subHeading tracking-headerSpacing2 uppercase">
          {title}
        </h1>
        <p className="w-full text-center text-customBlack text-lightHeading">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ShowCard;
